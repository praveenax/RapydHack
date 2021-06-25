var thumbnail_obj = {
    id:1,
    name:"video name",
    img_url:"link_for_the_image"
}

var collection_obj = {
    id:1,
    name:"collection name",
    img_url:"link_of last video attached"
}

//filter - "*title text*"
//pagination - start-1,end-10 -- return total_length;

// history - filter,pagination,userId => thumbnail_obj
// allVideos(my_videos) - filter,pagination,userId  => thumbnail_obj
// suggestion - filter,pagination,userId  => thumbnail_obj
// add to collection - userid, collection_id, video_id  
// getAllCollections - userid, filter(collection_name)  => [collection_obj]
// getAllCollection - userid, filter(video_name),collection_id  => [thumbnail_obj]

//getVideo - videoId, userId(only for allowed user), video (streaming_video)
//jumpToTime - videoId, time
