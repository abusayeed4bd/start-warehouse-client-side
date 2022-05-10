import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="question border p-4 m-3">
        <h2>What the defference between Node and Javascript?</h2>
        <hr />
        <p>
          <b>Javascript:</b> Javascript is a scripting language.It can run in
          browser.It is basically used on the client-side.Javascript is used in
          frontend development.Some of the javascript frameworks are RamdaJS,
          TypedJS, etc.
        </p>
        <p>
          <b>Node:</b> NodeJS is a Javascript runtime environment.We can run
          Javascript outside the browser with the help of NodeJS.It is mostly
          used on the server-side.
        </p>
      </div>
      <div className="question border p-4 m-3">
        <h2>What is the purpose of jwt and how does it work?</h2>
        <hr />
        <p>
          <b>JWT:</b> JWT stands for json web token. It is a security
          system.JWTs are used as a secure way to authenticate users and share
          information.
          <br />
          When a user sign in into website jwt create a token for this user and
          stored it in the server and agin when the user try to login the
          website using email and password jwt make another token for this user
          if the previous token and present token are matched it allows to
          access the website.
        </p>
      </div>
      <div className="question border p-4 m-3">
        <h2>What is the difference between sql and no-sql database ?</h2>
        <hr />
        <p>
          <b>SQL:</b> sql stands for <b>structured query language.</b> It is a
          relational database and vertically scalable.SQL databases are
          table-based.
        </p>
        <p>
          <b>No SQL:</b> No sql database are not relational database.It is
          horizontally scalable. NoSQL databases are document, key-value, graph,
          or wide-column stores. It is better for unstructured data like
          documents or JSON.
        </p>
      </div>
    </div>
  );
};

export default Blog;
