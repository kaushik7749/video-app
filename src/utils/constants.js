const GOOGLE_API_KEY = "AIzaSyCM6CRT6BdhfO9HlGWsk1T8RDfPI5g6YFc";

export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

//In the above url youtube is asking YOUR_API_KEY so we use GOOGLE_API_KEY