import React from 'react'

function Card({username, description, btn}) {
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://shadhinmusiccontent.sgp1.digitaloceanspaces.com/ArtistPreviewImageFile/AvoidRafa_300.jpg"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">{username}</h1>
      <p class="mt-2 text-sm text-gray-300">
       {description}
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
        {btn}
      </button>
    </div>
  </div>
  
  )
}

export default Card