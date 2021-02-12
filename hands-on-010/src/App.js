import { Blog, books, blogs, courses } from "./components/Blog";
import "./stylesheets/mystyle.css";

function App() {
	return (
		<div className="container">
			<Blog books={books} blogs={blogs} courses={courses} />
		</div>
	);
}

export default App;
