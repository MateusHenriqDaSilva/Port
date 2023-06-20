import style from '../../styles/postList.module.css'
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube'

interface MyNestedObject {
    header?: string
    text: string
    code?: string
    img?: any
    video?: any
}

interface MyObject {
    id: string
    title?: string
    description?: string
    link?: string
    post: MyNestedObject[];
}

export default function PostList(props: MyObject) {
    const spaces = '\u00A0\u00A0\u00A0\u00A0';

    return (
        <div className={style.containerGlobal}>
            <div className={style.contentBlog}>
                <div className={style.header}>
                    <h1 className={style.title}>
                        {props.title}
                    </h1>
                </div>
                {
                    props.post?.map((element, index) => {
                        if (element?.img) {
                            return (
                                <div className={style.main} key={index}>
                                    <h1 className={style.title}>{element.header}</h1>
                                    {
                                        element.text?.split('\n').map((element, index) => (
                                            <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                        ))
                                    }
                                    <div className={style.containerCode}>
                                        {
                                            element.code?.split('\n').map((element, index) => (
                                                <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                            ))
                                        }
                                    </div>
                                    <div className={style.contianerImage}>
                                        <Image
                                            src={element?.img}
                                            width={500}
                                            height={500}
                                            alt="Mateus Henrique Canvas"
                                        />
                                    </div>
                                </div>
                            )
                        } else if (element?.video) {
                            return (
                                <div className={style.main} key={index}>
                                    <h1 className={style.title}>{element.header}</h1>
                                    {
                                        element.text?.split('\n').map((element, index) => (
                                            <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                        ))
                                    }
                                    <div className={style.containerCode}>
                                        {
                                            element.code?.split('\n').map((element, index) => (
                                                <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                            ))
                                        }
                                    </div>
                                    <div className={style.containerVideo}>
                                        <ReactPlayer
                                            className={style.containerVideoTamanho}
                                            url={element.video}
                                            controls
                                        />
                                    </div>
                                </div>
                            )
                        } else if (element?.video && element?.img) {
                            <div className={style.main} key={index}>
                                <h1 className={style.title}>{element.header}</h1>
                                {
                                    element.text?.split('\n').map((element, index) => (
                                        <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                    ))
                                }
                                <div className={style.containerCode}>
                                    {
                                        element.code?.split('\n').map((element, index) => (
                                            <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                        ))
                                    }
                                </div>
                                <div className={style.containerImage}>
                                    <Image
                                        className={style.containerImageTamanho}
                                        src={element?.img}
                                        alt="Mateus Henrique Canvas"
                                    />
                                </div>
                                <div className={style.containerVideo}>
                                    <ReactPlayer
                                        className={style.containerVideoTamanho}
                                        url={element.video}
                                        controls
                                    />
                                </div>
                            </div>
                        } else {
                            return (
                                <div className={style.main} key={index}>
                                    <h1 className={style.title}>{element.header}</h1>
                                    {
                                        element.text?.split('\n').map((element, index) => (
                                            <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                        ))
                                    }
                                    <div className={style.containerCode}>
                                        {
                                            element.code?.split('\n').map((element, index) => (
                                                <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
