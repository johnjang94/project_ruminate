import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <NavBar />
      <main className="w-[100vw] h-[100vh]"> {children}</main>
      <Footer />
    </>
  )
}
