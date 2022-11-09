import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = `Blog : ${document.title}`;
    });
    return (
        <div>
            <div className="card border w-3/4 mx-auto mt-20 shadow-xl">
                <div className="card-body">
                    <code className="card-title"><span>1.</span>Write down the differences between SQL and NoSQL</code>
                    <p><span className='font-bold'>Answer: </span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                </div>
            </div>
            <div className="card border w-3/4 mx-auto mt-10 shadow-xl">
                <div className="card-body">
                    <code className="card-title"><span>2.</span>What is JWT, and how does it work?</code>
                    <p><span className='font-bold'>Answer: </span>Definition : JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br />
                        Working Principle : JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </p>

                </div>
            </div>
            <div className="card border w-3/4 mx-auto mt-10 shadow-xl">
                <div className="card-body">
                    <code className="card-title"><span>3.</span>What is the difference between javascript and NodeJS?</code>
                    <p><span className='font-bold'>Answer: </span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                </div>
            </div>
            <div className="card border w-3/4 mx-auto mt-10 shadow-xl">
                <div className="card-body">
                    <code className="card-title"><span>4.</span>How does NodeJS handle multiple requests at the same time?</code>
                    <p><span className='font-bold'>Answer: </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;