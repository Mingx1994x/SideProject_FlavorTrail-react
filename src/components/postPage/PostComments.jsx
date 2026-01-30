import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';

import useCreateComment from '../../query/useCreateComment';
import { getUserId } from '../../utils/loginUser';
import { daysFormat } from '../../utils/formatTIme';

import AlertModal from '../AlertModal';
import { commentQueryOption } from '../../query/handleQueryOption';

const logoUrl = './assets/images/Logo.png';

const PostComments = ({ id, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const { id: postId } = useParams();
  const { uid, isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const navigate = useNavigate();

  const { data: allComments } = useQuery(commentQueryOption());

  useEffect(() => {
    if (allComments) {
      setComments(allComments.filter((comment) => comment.postId == id));
    }
  }, [allComments, id]);

  const { mutate: createCommentMutation } = useCreateComment();

  const submitComment = (type = 'normal') => {
    if (!isLogin) {
      AlertModal.confirmAction({
        title: '請先登入',
        text: '迷路的尋者，登入後才能使用會員功能喔!',
        icon: 'info',
        confirmButtonText: '登入',
        cancelButtonText: '取消',
        onConfirm: () => {
          navigate('/login');
        },
      });
      return;
    }

    if (!newComment) {
      AlertModal.customMessage({
        text: '親愛的尋者唷！說點啥！',
      });
      return;
    }

    createCommentMutation(
      {
        postId,
        userId: getUserId(uid),
        type,
        comment: newComment,
        createDate: daysFormat(),
      },
      {
        onSuccess: () => {
          setNewComment('');
        },
      },
    );
  };

  return (
    <div className="bg-white rounded-3 p-5 mt-5 mb-14">
      <div>
        <select
          className="form-select py-2 px-5"
          aria-label="Default select example"
          defaultValue={'全部留言'}
          style={{
            width: '160px',
            height: '40px',
          }}
        >
          <option value={'全部留言'}>全部留言</option>
          <option value={'最新排序'}>最新排序</option>
        </select>
      </div>
      {comments.length === 0 ? (
        <div className="message-area py-7 border-bottom border-gray-200">
          <p className="px-3">目前沒有人留言！快來搶鮮！</p>
        </div>
      ) : (
        comments.map((comment, index) => (
          <div
            key={comment.id}
            className="message-area py-7 border-bottom border-gray-200"
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <img
                  className="rounded-circle object-fit-cover"
                  style={{
                    width: '48px',
                    height: '48px',
                  }}
                  src={comment?.user?.avatarUrl || logoUrl}
                  alt="user-img"
                />
                <div className="ms-5">
                  <div className="fs-5 fw-bold">{comment?.user?.nickName}</div>
                  <small className="text-gray-700">
                    {`B${index + 1}・${comment.createDate}`}
                  </small>
                </div>
              </div>
            </div>
            <div className="mb-5">{comment.comment}</div>
            <a href="#" className="link-success fw-bold">
              回覆
            </a>
          </div>
        ))
      )}
      {commentCount > 5 && (
        <div className="d-flex">
          <button type="button" className="btn border-0 ms-auto text-gray-700">
            更多留言
          </button>
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="寫下你的留言"
          value={newComment || ''}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="button"
          className="input-group-text"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => submitComment()}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_188_5759)">
              <path
                d="M7.27526 8.72361C7.14785 8.59643 6.996 8.49636 6.82888 8.42945L1.54221 6.30945C1.47909 6.28412 1.42523 6.24009 1.38785 6.18327C1.35047 6.12645 1.33138 6.05955 1.33312 5.99156C1.33486 5.92357 1.35736 5.85774 1.39759 5.8029C1.43783 5.74806 1.49388 5.70685 1.55821 5.68479L14.2249 1.35145C14.2839 1.33012 14.3479 1.32604 14.4092 1.33971C14.4705 1.35338 14.5266 1.38423 14.571 1.42864C14.6154 1.47305 14.6463 1.52919 14.66 1.59049C14.6736 1.65179 14.6695 1.71571 14.6482 1.77479L10.3149 14.4415C10.2928 14.5058 10.2516 14.5618 10.1968 14.6021C10.1419 14.6423 10.0761 14.6648 10.0081 14.6665C9.94011 14.6683 9.87322 14.6492 9.81639 14.6118C9.75957 14.5744 9.71554 14.5206 9.69021 14.4575L7.57021 9.16945C7.503 9.00245 7.40266 8.85079 7.27526 8.72361ZM7.27526 8.72361L14.5689 1.43145"
                stroke="#484848"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_188_5759">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

PostComments.propTypes = {
  id: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostComments;
