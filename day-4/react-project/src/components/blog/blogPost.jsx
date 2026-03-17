// Understanding how to structure a real UI using components.
// 🛠 What you have to do
// Create components:
// Header
// BlogPost
// Footer
// Pass blog data (title, content, author) via props
// Render multiple blog posts
// Use expressions to:
// Show "Popular Post" if views > 1000

import Header from './header'
import Footer from './footer'

function BlogPost({ title, content, author }) {
    return (
        <>
        <Header />
            <div className="blog">

                {/* Displaying the title of the blog */}
                <h2> {title} </h2>

                {/* Displaying the content of the blog */}
                <p> {content} </p>

                {/* Displaying the author of the blog */}
                <p> {author} </p>
            </div>
            <Footer />

        </>
    )

}

export default BlogPost