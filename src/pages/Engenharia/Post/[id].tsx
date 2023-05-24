
import { conteudoBlogEngenharia } from '@/src/components/Engenharia/DadosPostEngenharia'
import { useRouter } from 'next/router'
import PostListEngenharia from '@/src/components/Engenharia/PostListEngenharia'


export default function Post() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                conteudoBlogEngenharia.map((element, index) => {
                    if (element.id == id) {
                        return (
                            <PostListEngenharia key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                        )
                    }
                })
            }
        </div>
    )
}