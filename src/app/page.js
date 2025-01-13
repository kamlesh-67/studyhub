import BookstorePage from "@/pages/bookstore/page";
import ChapterDetails from "@/pages/DetailedPage/components/ChapterDetails";
import DetailedPage from "@/pages/DetailedPage/page";
import HomePage from "@/pages/home/page";
import PaymentPage from "@/pages/payment/page";
import Layout from "@/pages/Utils/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
