import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";

const AddBlog = () => {
  // State for managing selected options for category and tags
  const [categoryOption, setCategoryOption] = useState(null);
  const [tagOption, setTagOption] = useState(null);

  // React Hook Form for managing form state and validation
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Predefined category and tag options
  const categoryOptions = [
    { value: "Gaming", label: "Gaming" },
    { value: "Reviews", label: "Reviews" },
    { value: "News", label: "News" },
    { value: "Tips & Tricks", label: "Tips & Tricks" },
    { value: "Exploration", label: "Exploration" },
    { value: "Nostalgia", label: "Nostalgia" },
    { value: "New Releases", label: "New Releases" },
  ];

  const tagOptions = [
    { value: "CS:GO", label: "CS:GO" },
    { value: "first-person shooter", label: "first-person shooter" },
    { value: "strategy", label: "strategy" },
    { value: "competitive gaming", label: "competitive gaming" },
    { value: "teamwork", label: "teamwork" },
    { value: "tactics", label: "tactics" },
    { value: "esports", label: "esports" },
    { value: "aim training", label: "aim training" },
    { value: "map knowledge", label: "map knowledge" },
  ];

  // Function to handle form submission
  const handleAddBlog = (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    const form = event.target;

    // Extracting form values
    const title = form.title.value;
    const author = form.author.value;
    const date = form.date.value;
    const featured_image = form.featured_image.value;
    const category = form.category.value;
    const facebook = form.facebook.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;

    // Constructing the new blog object
    const newBlog = {
      title,
      author,
      date,
      featured_image,
      category,
      facebook,
      twitter,
      linkedin,
    };
    console.log(newBlog);

    // Sending blog data to the server
    fetch("https://titans-arena-server.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // Display success notification using SweetAlert2
          Swal.fire({
            title: "Success!",
            text: "Blog added successfully",
            icon: "success",
            color: "#FFFFFF",
            background:
              " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)",
            confirmButtonColor: "cool",
            confirmButtonText: "Cool",
          });
          form.reset(); // Resetting the form after successful submission
        }
      });
  };

  return (
    <div className="pt-6 w-full shadow-xl px-5 ">
      {/* Title component for page header */}
      <Title primaryText="Add Your Own" secondaryText="Blogs" />

      {/* Blog submission form */}
      <form onSubmit={handleAddBlog}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Title input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              placeholder="Title"
              name="title"
              {...register("title")}
            />
          </div>

          {/* Author input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              placeholder="Author Name"
              name="author"
              {...register("author")}
            />
          </div>

          {/* Date input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Date</label>
            <input
              type="date"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              name="date"
              {...register("date")}
            />
          </div>

          {/* Featured Image URL input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              photo url
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3"
              name="featured_image"
              {...register("featured_image")}
            />
          </div>

          {/* Category dropdown */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Category
            </label>
            <CreatableSelect
              name="category"
              className="w-75 font-semibold !bg-[#303540]"
              defaultValue={categoryOption}
              onChange={setCategoryOption}
              options={categoryOptions}
              isMulti
            />
          </div>

          {/* Tags dropdown */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Tags</label>
            <CreatableSelect
              className="w-75 font-semibold !bg-[#303540]"
              defaultValue={tagOption}
              onChange={setTagOption}
              options={tagOptions}
              isMulti
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-2">
          {/* Facebook input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              Facebook
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="facebook"
              placeholder="Facebook"
              {...register("facebook")}
            />
          </div>

          {/* Twitter input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">Twitter</label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="twitter"
              placeholder="Twitter"
              {...register("twitter")}
            />
          </div>

          {/* LinkedIn input */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1">
              LinkedIn
            </label>
            <input
              type="text"
              className="border-b bg-transparent text-white w-full py-2 px-3 font-semibold"
              name="linkedin"
              placeholder="LinkedIn"
              {...register("linkedin")}
            />
          </div>
        </div>

        {/* Blog content textarea */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ffff] text-base font-semibold">
              Blog
            </span>
          </label>
          <textarea
            type="text"
            name="content"
            className="h-24 border-b bg-transparent text-white w-full py-2 px-3"
            placeholder="Detail description"
            {...register("content")}
          />
        </div>

        {/* Submit button */}
        <div className="form-control pb-5 mt-6">
          <input
            className="border-2 rounded-tl-box rounded-br-box p-3 w-full font-bold hover:bg-green-500 my-4 border-green-500 text-white"
            type="submit"
            value="Publish Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
