
import PostList from '@/src/components/Programming/PostList'
import { contentBlog } from '@/src/components/Programming/dadosPost'
import { useRouter } from 'next/router'


export default function Post() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                contentBlog.map((element, index) => {
                    if (element.id == id) {
                        return (
                            <PostList key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                        )
                    }
                })
            }
        </div>
    )
}