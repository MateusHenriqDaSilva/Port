
import { useRouter } from 'next/router'
import { conteudoBlogInteligencia } from '@/src/components/Inteligencia/DadosPostInteligencia'
import PostList from '@/src/components/Programacao/PostList'

export default function Post() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div >
            {
                conteudoBlogInteligencia.map((element, index) => {
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