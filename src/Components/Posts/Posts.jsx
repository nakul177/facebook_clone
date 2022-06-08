import { Gif, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { color } from "@mui/material/node_modules/@mui/system";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import "./Posts.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 500,
  overflow: "scroll",
};

export const Posts = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [send, setSend] = useState([]);

  const handleSubmit = (event) => {
    console.log("send");
    event.preventDefault();
    const obj = {
      title: input,
      img: data,
    };
    setSend([...send, obj]);
    setSearch("");
    setInput("");
    setData("");
  };

  const searchGif = () => {
    console.log("Gif");
    setLoading(true);
    if (search.length > 0) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=0cdU9SIyPKdy54PvamUp7w0QOaC5eDO3&q=${search}&limit=25&offset=0&rating=g&lang=en`
      )
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        .catch((err) => {
          setLoading(true);
          alert("Something went wrong");
        });
    }
  };

  const handle = (url) => {
    console.log(url);
    setData(url);
  };

  return (
    <div>
      <div className="posts">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="gif">
              <h1>Choose a GIF</h1>
              <div className="gif__header">
                <input
                  type="text"
                  placeholder="Search GIFs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchGif}>Search</button>
              </div>
              <div className="result">
                <div className="loading">
                  <div className="loader"></div>
                </div>
                <div className="list">
                  {gifs.map((gif) => (
                    <div onClick={() => handle(gif)} className="listgif" >
                      <img src={gif} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <div>
          <div className="messageSender__top">
            <Avatar />
            <form action="">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__top__input"
                type="text"
                placeholder="What on your mind?"
              />

              <button onClick={handleSubmit} type="submit">
                Posts
              </button>
            </form>
          </div>
          <div>
            <img src={data} alt="" />
          </div>
        </div>

        <div className="messageSender__bottom">
          <div className="messageSender__bottom__options">
            <Videocam style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__bottom__options">
            <PhotoLibrary style={{ color: "green" }} />
            <h3>Photo/Videos</h3>
          </div>
          <div className="messageSender__bottom__options ">
            <button onClick={() => setOpen(true)}>
              <Gif style={{ background: "#2ABBA7", color: "white" }} />
              <h3>GIF</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="showinput">
        <h1>Show</h1>
        {send.map((e) => {
          return (
            <div>
              <h1>{e.title}</h1>
              <img src={e.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
