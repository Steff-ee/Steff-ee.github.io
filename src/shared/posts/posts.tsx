import { POST_00100 } from './store/POST_00100'
import { POST_00102 } from './store/POST_00102'
import { POST_00103 } from './store/POST_00103'
import { POST_00104 } from './store/POST_00104'
import { POST_00106 } from './store/POST_00106'
import { POST_00108 } from './store/POST_00108'

/* GAMES LINKED LIST */

// head & tail
export const gamesLatestPost = POST_00102
export const gamesFirstPost = POST_00100

// links
POST_00100.nextPostByRoute = POST_00102
POST_00102.prevPostByRoute = POST_00100

/* STORIES LINKED LIST */

// head & tail
export const storiesFirstPost = POST_00103
export const storiesLatestPost = POST_00106

// links
POST_00103.nextPostByRoute = POST_00104
POST_00104.prevPostByRoute = POST_00103
POST_00104.nextPostByRoute = POST_00106
POST_00106.prevPostByRoute = POST_00104

/* MATH & SCIENCE LINKED LIST */
export const mathScienceFirstPost = POST_00108

/* ALL POSTS */

// ordered reverse chronologically
export const allPosts = [POST_00108, POST_00106, POST_00104, POST_00103, POST_00102, POST_00100]
