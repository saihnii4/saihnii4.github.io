import * as React from "react"

const Index = () => {
  const song = {
    albumCover:
      "https://i.scdn.co/image/ab67616d00001e02c5547296da4279c0f3a93cc9",
    artist: "Origami Angel",
    album: "Somewhere City",
    title: "The Title Track",
  }

  return (
    <div className="bg-nord0 h-full w-full flex justify-center items-center">
      <div className="flex bg-nord1 py-12 px-8 flex-col gap-6 rounded-md">
        <img
          src={song.albumCover}
          className="rounded-2xl"
          width={240}
        />
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-nord2">{song.title}</span>
          <span className="text-md font-semibold text-nord3">
            {song.artist} -{" "}
            <span className="text-md font-light">{song.album}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

// const Index = () => {
//   const song = {
//     albumCover:
//       "https://i.scdn.co/image/ab67616d00001e02c5547296da4279c0f3a93cc9",
//     artist: "Origami Angel",
//     album: "Somewhere City",
//     title: "The Title Track",
//   }

//   return (
//     <div className="bg-nord0 h-full w-full flex justify-center items-center">
//       <div className="flex bg-nord1 py-12 px-8 flex-row gap-6 rounded-md">
//         <img
//           src={song.albumCover}
//           width={60}
//           height={60}
//         />
//         <div className="flex flex-col">
//           <span className="text-3xl font-bold text-nord2">{song.title}</span>
//           <span className="text-md font-semibold text-nord3">
//             {song.artist} -{" "}
//             <span className="text-md font-light">{song.album}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Index
