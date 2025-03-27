import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, addPost, resetSpinner } from "../store/PostSlice";
import { useFormik } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate } from "react-router";

const override = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderColor: "white",
};

const Posts = () => {
  const { posts, spinner } = useSelector((store) => store.posts);
  //   console.log("possts", posts);
  //   const spinner = true

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("useffect calld")
    dispatch(getPost());
  }, []);
  const formik = useFormik({
    initialValues: { title: "", body: "" },
    onSubmit: ({ title, body }) => {
      dispatch(resetSpinner());
      dispatch(addPost({ title, body }));
    },
  });
  const { isLogged } = useSelector((store) => store.login);
  if (!isLogged) return <Navigate to="/login" />;

  return (
    <>
      <div className="add-post">
        <div className="add-post bg-[#B3D8A8] shadow-md">
          <div className="text-center text-xl font-semibold text-[#205781]">
            Add Post
          </div>
          <div className=" p-4">
            <form
              className="  flex flex-col gap-1.5 items-center  "
              onSubmit={formik.handleSubmit}
            >
              <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                <div className="flex flex-col gap-0.5 ">
                  <label>Title</label>
                  <input
                    className="p-1 border-2 rounded-md border-blue-200 "
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Enter title"
                  ></input>
                </div>
                <div className="flex flex-col gap-0.5 ">
                  <label>Body</label>
                  <input
                    className="p-1 border-2 rounded-md border-blue-200"
                    type="text"
                    name="body"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    placeholder="Enter description"
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                disabled={spinner}
                className={`relative text-[18px] font-medium border-2 rounded-md bg-[#59809e] p-2 flex justify-center items-center`}
              >
                <span className={`${spinner ? "text-transparent" : ""}`}>
                  Add item
                </span>
                <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <ClipLoader
                    color={"white"}
                    loading={spinner}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    size={25}
                    cssOverride={override}
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="post-list">
        {posts.length ? (
          posts.map((element, index) => {
            return (
              <div
                key={index}
                className="bg-[#c0c0c0] p-2  m-3 shadow-md border-2 rounded-md border-[#c0c0c0]"
              >
                <div>
                  <div>
                    <span className="text-md font-medium">{element?.id}</span>.
                    {" " + element?.title}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>no posts</div>
        )}
      </div>
    </>
  );
};
export default Posts;
//ui//calling two time
