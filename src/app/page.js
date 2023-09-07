import Banner from '@components/components/banner/banner'
import ConnectUs from '@components/widgets/connectUs/connectUs'
import FeaturedServices from '@components/widgets/featuredServices/featuredServices'
import HappyCustomers from '@components/widgets/happyCustomers/happyCustomers'
import Intro from '@components/widgets/intro/intro'
import ServiceList from '@components/widgets/serviceList/serviceList'
import WhyWill from '@components/widgets/whyWill/whyWill'

export default function Home() {
  return (
    <main>
      <Banner />
      <ServiceList />
      <Intro />
      <FeaturedServices />
      <WhyWill />
      <HappyCustomers />
      <ConnectUs />
    </main>
  )
}
