
import { useRouter } from 'next/router'
import PostListInteligencia from '@/src/components/Inteligencia/PostListInteligencia'
import { conteudoBlogInteligencia } from '@/src/components/Inteligencia/DadosPostInteligencia'


export default function Post() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                conteudoBlogInteligencia.map((element, index) => {
                    if (element.id == id) {
                        return (
                            <PostListInteligencia key={index} id={element.id} title={element.title} description={element.description} post={element.post} />
                        )
                    }
                })
            }
        </div>
    )
}