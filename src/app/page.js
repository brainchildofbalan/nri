import Banner from '@components/components/banner/banner'
import useFetch from '@components/hooks/useFetch'
import ConnectUs from '@components/widgets/connectUs/connectUs'
import FeaturedServices from '@components/widgets/featuredServices/featuredServices'
import HappyCustomers from '@components/widgets/happyCustomers/happyCustomers'
import Intro from '@components/widgets/intro/intro'
import ServiceList from '@components/widgets/serviceList/serviceList'
import WhyWill from '@components/widgets/whyWill/whyWill'

export default async function Home() {
  const data = await useFetch(`/services-categories`);
  return (
    <main>
      <Banner />
      <ServiceList {...data} />
      <Intro />
      <FeaturedServices {...data} />
      <WhyWill />
      <HappyCustomers />
      <ConnectUs />
    </main>
  )
}
