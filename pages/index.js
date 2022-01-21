import Link from "next/link"

function Index() {
  return(
    <>
      <h1>Hello World</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  )
}

export default Index