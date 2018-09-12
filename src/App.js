import React, { Component } from 'react';
import albums from "./data/discography";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      songs: []
    }
  }

  componentDidMount() {
    this.attachEventHandlers();
    this.hideAllSongs();
  }

  hideAllSongs() {
    var songsListsNodeList = document.querySelectorAll(".songs-list");
    var songListsArray = Array.from(songsListsNodeList);
    songListsArray.forEach(list => {
      list.style.display = "none";
    });
  }

  attachEventHandlers() {
    // Grab all album lists and convert them from
    // a NodeList to an Array.
    var albumsNodeList = document.querySelectorAll(".album");
    var albumsArray = Array.from(albumsNodeList);

    // Attach an event handler to each album
    // list so that when it is clicked, it's
    // songs show.
    albumsArray.forEach(album => {
      album.onclick = function(event) { 
        var songsList = Array.from(event.target.childNodes).filter(node => node.className === "songs-list")[0] ;
        if (songsList.style.display === "none")
          songsList.style.display = "";
        else
          songsList.style.display = "none";
       }
    });

  }

  render() {
    return (
      <div id="app-entry">
        <ol id="albums-list">
          {
            albums.studio.map((album, index) => 
              <li
                id={album.name.toLowerCase().split(' ').join('-')}
                key={album.name.toLowerCase().split(' ').join('-')}
                className={"album"}
              >
                {album.name}

                <ol className="songs-list">
                  {album.songs.map(song =>
                      <li
                        id={song.name.toLowerCase().split(' ').join('-')}
                        key={song.name.toLowerCase().split(' ').join('-')}
                        className={"song"}
                      >
                        {song.name}
                      </li>
                  )}
                </ol>
              </li>
            )
          }
        </ol>
      </div>
    )
  }
}

export default App;