import Button from "@components/components/button";
import SuccessNonPayment from "@components/components/pages/successNonPayment";
import SuccessPage from "@components/components/pages/sucessPage/successPage";
import useFetch from "@components/hooks/useFetch";
import { useSearchParams } from "next/navigation";

export async function generateMetadata({ params }) {
  const options = { cache: "no-store" };
  const data = await useFetch(`/meta-data/success`, options);
  return {
    title: data && data.length > 0 ? data[0].site_title : `NRI Life`,
    description:
      data && data.length > 0 ? data[0].site_description : `NRI Life`,
    keywords:
      data && data.length > 0 ? data[0].site_keyword.split(", ") : `NRI Life`,
    authors: [
      {
        name:
          data && data.length > 0
            ? data[0].site_keyword.split(", ")
            : `NRI Life`,
      },
      { name: `NRI Life`, url: "https://nrilife.com" },
    ],
    metadataBase: new URL("https://nrilife.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: data && data.length > 0 ? data[0].site_title : `NRI Life`,
      description:
        data && data.length > 0 ? data[0].site_description : `NRI Life`,
      url: "https://nrilife.com",
      siteName: `NRI Life`,
      images:
        data && data.length > 0 && data[0].image
          ? `${process.env.NEXT_PUBLIC_APP_URL}/uploads/${data[0].image[0].filename}`
          : "/apple-touch-icon.png",
      locale: "en_IN",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const success = async ({ searchParams }) => {
  const options = { cache: "no-store" };
  const data = await useFetch(`/order/${searchParams.order}`, options);
  console.log(searchParams.order);

  if (!searchParams.order) {
    return (
      <div className={`w-full relative h-[100vh] pt-[200px]`}>
        <div className={`container mx-auto px-[15px]`}>
          <div
            className={`w-full relative max-w-[440px] mx-auto flex flex-col items-center`}
          >
            <div
              className={`w-[80px] h-[80px] rounded-full border-2 border-green-500 flex justify-center items-center pb-[5px] mb-[20px]`}
            >
              <span
                className={`w-[10px] h-[22px] border-b-[3px] border-r-[3px] border-green-500 rotate-45`}
              ></span>
            </div>
            <h3 className={`text-[25px] text-center mb-[5px]`}>
              Thank you for ordering.
            </h3>
            <p className={`text-center text-[16px] mb-[16px]`}>
              We acknowledge the receipt of your order and wish to inform you
              that our team will commence processing it promptly. Within the
              next 24 hours, one of our representatives will reach out to you to
              gather further details necessary for the completion of your order.
            </p>
            <div className={`w-full relative flex justify-center`}>
              <a href="mailto:">info@nrilife.com</a>{" "}
              <span className="px-[10px]">|</span>
              <a href="tel:+919645550072">+919645550072</a>,
              <a href="tel:+919645550073">73</a>,
              <a href="tel:+919645550074">74</a>
            </div>

            <div className={`w-full relative flex justify-center mt-[14px]`}>
              <Button
                as={`link`}
                href={`/services`}
                text={`View all services`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <SuccessPage data={data} />
    </>
  );
};

export default success;
