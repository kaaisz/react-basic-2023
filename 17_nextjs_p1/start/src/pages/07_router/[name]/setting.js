export default function Setting({ query }) {
    return <h1>{ query.name }</h1>
}

// set function getServerSideProps(Funciton name must be exactly the same)
export async function getServerSideProps({ query }) {
    return {
        props: { query }
    }
}