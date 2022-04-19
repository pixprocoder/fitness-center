import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="w-50 mx-auto">
        <h5> Difference between authorization and authentication?</h5>
        <p>
          <h3 className="text-decoration-underline">Answer:</h3>
          Authentication means to confirm your own identity, while authorization
          means to grant access to the system. In simple terms, authentication
          verifies who you are, while authorization verifies what you have
          access to.
        </p>
        <hr />
      </div>

      <div className="w-50 mx-auto">
        <h5>
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h5>
        <p>
          <h3 className="text-decoration-underline">Answer:</h3>
          We want to use Firebase because it gives us a huge suite of services
          that we don't have to write. We could duplicate Firebase's services
          ourselves, but why spend the time and money? And good luck coming in
          under Firebase's price point. It's not like Firebase is some
          extravagantly expensive service. The billing structure is entirely
          reasonable and one of the least expensive options... especially when
          we consider developer time saved. <br />
          <strong>There are other options like AWS Amplify</strong> is Amazon’s
          cloud platform. It offers a set of services and tools for building
          full-stack, scalable apps powered by Amazon. Some of its tools can be
          used in combination or alone.
        </p>
        <hr />
      </div>
      <div className="w-50 mx-auto">
        <h5>
          {" "}
          What other services does firebase provide other than authentication?
        </h5>
        <p>
          <h3 className="text-decoration-underline">Answer:</h3>
          Firebase also have SDK admin that allows us to write code on our
          backend that manipulates data in Firebase and Google Cloud services
          (such as Realtime Database, Firestore, Cloud Storage, and Cloud
          Messaging).
        </p>
      </div>
    </div>
  );
};

export default Blogs;
