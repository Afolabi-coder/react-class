import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { getPosts } from '../actions/post-action';

import CardList from './list';
import Color from '../hoc/color';

import '../app.css';

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    const postList = posts.slice(0, 3).map((post, id) => {
      return (
        <div key={id}>
          <CardList {...post} />
        </div>
      );
    });

    return (
      <div className="container-fluid bg-light">
        <Jumbotron>
          <div className="row">
            <div className="col-md-6">
              <img
                className="rounded img-fluid shadow"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fback-view-of-modern-programmer-sitting-and-writing-code-picture-id508417878%3Fk%3D6%26m%3D508417878%26s%3D612x612%26w%3D0%26h%3DU_7Zyd5CMopBFqwvm2oG2mAOMOcl-4SJEG-uStQLEUU%3D&f=1&nofb=1"
                alt="../"
              />
            </div>
            <div className="col-md-6">
              <h1 className="text-center text-secondary"> My Portfolio</h1>
              <p className="lead mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ipsa praesentium itaque similique, architecto in
                obcaecati asperiores saepe optio doloremque aut mollitia ipsum
                magni? Aperiam cum doloribus nam alias amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Distinctio ipsa
                praesentium itaque similique, architecto in obcaecati asperiores
                saepe optio doloremque aut mollitia ipsum magni? Aperiam cum
                doloribus nam alias amet.
              </p>
              <div className="text-center">
                <a href="#just" className=" shadow btn btn-info">
                  Learn more
                </a>
                <a href="#just" className="mx-3 shadow btn btn-danger">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="container text-center">
          <h1 className="text-center text-secondary"> Projects done</h1>
          <div className="row display-work">
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">Project oen</div>
                <div className="card-body">
                  <div className="card-img">
                    <img
                      className="card-img my-3"
                      width="200"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F13307%2Fscreenshots%2F767552%2Fdark-wood.jpg&f=1&nofb=1"
                      alt="...porto"
                    />
                  </div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  quia, totam eius blanditiis consequuntur neque dicta earum
                  impedit commodi odit nisi. Illo repellat modi similique
                  laborum iusto aut labore corrupti?
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">Project oen</div>
                <div className="card-body">
                  <div className="card-img my-3">
                    <img
                      className="card-img"
                      width="200"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F43%2F89%2F8c%2F43898c5a7ec6e3578ad4611fdfe523c4--card-ui-design-ui-ux.jpg&f=1&nofb=1"
                      alt="...porto"
                    />
                  </div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  quia, totam eius blanditiis consequuntur neque dicta earum
                  impedit commodi odit nisi. Illo repellat modi similique
                  laborum iusto aut labore corrupti?
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-header">Project oen</div>
                <div className="card-body" id="home">
                  <div className="card-img">
                    <img
                      className="card-img my-3"
                      width="200"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.collectui.com%2Fshots%2F4405806%2Fhumbleteam-website-concept-medium&f=1&nofb=1"
                      alt="...porto"
                    />
                  </div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  quia, totam eius blanditiis consequuntur neque dicta earum
                  impedit commodi odit nisi. Illo repellat modi similique
                  laborum iusto aut labore corrupti?
                </div>
              </div>
            </div>
          </div>

          {/* your code */}
          <div className="container m-4">
            <h1>Blog posts</h1>
            {postList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});
export default connect(mapStateToProps, { getPosts })(Color(Home));
