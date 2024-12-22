import NewsList from "@/component/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestArchivePage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
