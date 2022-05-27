import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <p className='text-center text-primary display-2xl mt-4'>
                    ques no. 1: How will you improve the performance of a React Application? <br />
                </p>
                <h2 className='text-center text-success display-2xl mt-3' >ans to the ques no.1</h2>
                <p className='text-center'>
                    React is a User Interface (UI) library.In React applications, we are guaranteed a very fast UI by default. In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:Keeping component state local where necessary,
                    Memoizing React components to prevent unnecessary re-renders,
                    Code-splitting in React using dynamic import(),
                    Windowing or list virtualization in React,
                    Lazy loading images in React.etc.We’ve learned that a state update in a parent component re-renders the parent and its child components.Memoization is an optimization strategy that caches a component-rendered operation.React.memo is a higher-order component used to wrap a purely functional component
                </p>

            </div>
            <div>
                <p className='text-center text-primary display-2xl mt-4'>
                    ques no. 2:What are the different ways to manage a state in a React application?  <br />
                </p>
                <h2 className='text-center text-success display-2xl mt-3' >ans to the ques no.2</h2>
                <p className='text-center'>
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in our React apps:1.Local state,
                    2. Global state,
                    3.Server state,
                    4. URL state.
                    Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                    Global (UI) state – Global state is data we manage across multiple components.Server state – Data that comes from an external server that must be integrated with our UI state.URL state – Data that exists on our URLs, including the pathname and query parameters.useState is the first tool we should reach for to manage state in your components.
                </p>
            </div>
            <div>
                <p className='text-center text-primary display-2xl mt-4'>
                    ques no. 3: How does prototypical inheritance work? <br />
                </p>
                <h2 className='text-center text-success display-2xl mt-3' >ans to the ques no.3</h2>
                <p className='text-center'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor.All JavaScript objects inherit properties and methods from a prototype:Date objects inherit from Date.prototype.
                    Array objects inherit from Array.prototype.,
                    Player objects inherit from Player.prototype.JavaScript ECMAScript 5 comes with the function Object.create( ).Using hasOwnProperty, we can test if an object contains a certain prototype property.
                </p>

            </div>
            <div>
                <p className='text-center text-primary display-2xl mt-4'>
                    ques no. 5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  <br />
                </p>
                <h2 className='text-center text-success display-2xl mt-3' >ans to the ques no.5</h2>
                <p className='text-center'>
                    A product description is the marketing copy that explains what a product is and why it’s worth purchasing. Focus on our ideal buyer:When we write a product description with a huge crowd of buyers in mind, our descriptions become wishy-washy and we end up addressing no one at all.Entice with benefits:When we sell our own products, we get excited about individual product features and specifications. We live and breathe our company, our website, and our products.Avoid yeah, yeah phrases:When we’re stuck for words and don’t know what else to add to our product description, we often add something bland like "excellent product quality".Justify using superlatives:Superlatives sound insincere unless you clearly prove why your product is the best, the easiest, or the most advanced. Appeal to your readers’ imagination: Appeal to your readers’ imagination.
                </p>

            </div>

            <div>
                <p className='text-center text-primary display-2xl mt-4'>
                    ques no. 6: What is a unit test? Why should write unit tests? <br />
                </p>
                <h2 className='text-center text-success display-2xl mt-3' >ans to the ques no.6</h2>
                <p className='text-center'>
                    Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.There are two types of Unit Tests:Positive Testing - testing the code by giving valid data.
                    Negative Testing - testing the code by giving the Invalid data.Integration test focuses on the point where individual units are combined and tested as a group
                </p>

            </div>
        </div>
    );
};

export default Blogs;