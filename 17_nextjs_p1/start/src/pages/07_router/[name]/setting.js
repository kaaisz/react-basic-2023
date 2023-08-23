import { useRouter } from "next/router"

export default function Setting({ query }) {
    const router = useRouter();
    console.log(query);
    const clickHandler = () => {
        router.replace('/', 'dummy-url') // clickHandler Triggers to replace / with dummy-url
    }
    return (
        <>
            <h1>Get name from router: { router.query.name }</h1>
            <button onClick={clickHandler}>Screen Transition by Action</button>
        </>
    )
}

export async function getServerSideProps({ query }) {
    return {
        props: { query }
    }
}