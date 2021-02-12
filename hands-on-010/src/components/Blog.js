import React from 'react';
import "../stylesheets/mystyle.css";

export const Blog = (props) => {
    return (
        <div className="flexbox">
            <div className="st2">
                <h1> Book Details </h1>
                {bookdet(props)}
            </div>

            <div className="v1">
                <h1> Blog Details </h1>
                {content(props)}
            </div>

            <div className="mystyle1">
                <h1> Course Details </h1>
                {coursedet(props)}
            </div>
        </div>
    );
}

const bookdet = (props) => {
    return (
        <ul>
            {props.books.map((book) =>
                <div key={book.id}>
                    <h3> {book.bname} </h3>
                    <h4> {book.price}</h4>
                </div>
            )}
        </ul>
    );
}

const content = (props) => {
    return (
        <ul>
            {props.blogs.map((blog) =>
                <div key={blog.id}>
                    <h2> {blog.topic} </h2>
                    <h3> {blog.author}</h3>
                    <p>{blog.desc}</p>
                </div>
            )}
        </ul>
    );
}

const coursedet = (props) => {
    return (
        <ul>
            {props.courses.map((course) =>
                <div key={course.id}>
                    <h2> {course.name} </h2>
                    <h3> {course.date}</h3>
                </div>
            )}
        </ul>
    );
}

export const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 },
];

export const blogs = [
    { id: 111, topic: "React Learning", author: "Stephen Biz", desc: "Welcome to learning React" },
    { id: 112, topic: "Installation", author: "Schewzdenier", desc: "You can install React from npm." },
];

export const courses = [
    { id: 121, name: "Angular", date: "4/5/2021" },
    { id: 122, name: "React", date: "6/3/2021" },
];