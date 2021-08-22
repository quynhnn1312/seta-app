import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import { selectPost, apiPostList } from "../createSlices/post";
import Pagination from "react-js-pagination";
import PostForm from "./PostForm";
import { selectUser, apiUserList } from "../createSlices/user";
import Loading from "./Loading";

function PostList() {
  const users = useSelector(selectUser);
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();
  const [pageItemFirst, setPageItemFirst] = useState(1);
  const [pageItemLast, setPageItemLast] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [postData, setPostData] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(apiPostList());
    await dispatch(apiUserList());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const indexOfLastBlog = activePage * perPage;
    const indexOfFirstBlog = indexOfLastBlog - perPage;
    const postDataNew = [...posts]
      .reverse()
      .slice(indexOfFirstBlog, indexOfLastBlog);
    setPostData(postDataNew);
    setPageItemFirst(indexOfFirstBlog + 1);
    setPageItemLast(indexOfLastBlog);
  }, [activePage, perPage, posts]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleToggleForm = () => {
    setIsShowForm(!isShowForm);
  };

  const handleShowUserNamePost = (id) => {
    if (!id) return "";
    const user = users.find((user) => +user.id === +id);
    return user?.name;
  };

  return (
    <div className="post-list">
      {isLoading && <Loading />}
      <h1>I. React - Redux</h1>
      <div className="warp-add-new-post">
        <Button
          onClick={handleToggleForm}
          className="action-add-new-post"
          outline
          color="success"
        >
          Add New Post
        </Button>

        {isShowForm && <PostForm handleCloseForm={handleToggleForm} />}
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>#ID</th>
            <th style={{ width: "100px" }}>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postData?.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{handleShowUserNamePost(post.userId)}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination">
        <div
          className="dataTables_info"
          id="dataTable_info"
          role="status"
          aria-live="polite"
        >
          Showing {pageItemFirst} to {pageItemLast} of {posts.length} entries
        </div>
        <Pagination
          prevPageText="Previous"
          nextPageText="Next"
          hideFirstLastPages
          activePage={activePage}
          itemsCountPerPage={perPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={5}
          itemClass="page-item"
          linkClass="page-link"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default PostList;
