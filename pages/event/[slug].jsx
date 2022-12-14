import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Event = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <Layout>
            <h1>{slug}</h1>
        </Layout>
    )
}

export default Event