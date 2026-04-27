import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');

import { allPostsQueryOption } from '@/query/handleQueryOption';
import usePostFilterParams from '@/hooks/usePostFilterParams';

import PostFilter from '@/pages/posts/PostFilter';
import PostMobileFilterDropdown from '@/pages/posts/PostMobileFilterDropdown';
import PostCard from '@/components/PostCard/PostCard';
import CircleCTAButton from '@/components/CircleCTAButton';
import FullScreenLoading from '@/components/FullScreenLoading';

const AllPosts = () => {
  const startTriggerRef = useRef();
  const endTriggerRef = useRef();
  const { filterParams: filter } = usePostFilterParams();

  const { data: allPosts, isPending } = useQuery(allPostsQueryOption(filter));

  if (isPending) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <div className="allPost container">
        <PostMobileFilterDropdown />
        <div ref={startTriggerRef} className="postNav container mb-13 mb-lg-7">
          <PostFilter postLength={allPosts?.length} />
        </div>
        <main className="postCard mb-18">
          {allPosts &&
            (allPosts.length === 0 ? (
              <p className="fs-4 text-center py-20">目前還沒有貼文 ( ´•̥̥̥ω•̥̥̥` )</p>
            ) : (
              allPosts.map((post) => <PostCard key={post.id} post={post} />)
            ))}
        </main>
      </div>
      <div ref={endTriggerRef}></div>

      {/* CTA */}
      <CircleCTAButton
        title={'分享美味'}
        startTriggerRef={startTriggerRef}
        endTriggerRef={endTriggerRef}
        startPosition={'top 2%'}
        endPosition={'bottom -200%'}
      />
    </>
  );
};

export default AllPosts;
