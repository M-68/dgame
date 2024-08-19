import Layout from "../components/Layout";
import PostFormCard from "../components/PostFormCard";
import PostCard, { PostModal } from "../components/PostCard";
import React, { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
// import { StarSystem } from 'stellardream';
// import LoginPage from "../login/social-login";

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);

/* 
    // const starSystem = new StarSystem(1549748672440);
    // console.log(JSON.stringify(starSystem, null, 2));
    var myNumber1 = Math.floor(Math.random() * 10);
    var myNumber2 = Math.floor(Math.random() * 10);
    var myNumber3 = Math.floor(Math.random() * 10);
    var myNumber4 = Math.floor(Math.random() * 10);
    var myNumber5 = Math.floor(Math.random() * 10);
    var myNumber6 = Math.floor(Math.random() * 10);
    var myNumber7 = Math.floor(Math.random() * 10);
    var myNumber8 = Math.floor(Math.random() * 10);
    var myNumber9 = Math.floor(Math.random() * 10);
    var myNumber10 = Math.floor(Math.random() * 10);
    var myNumber11 = Math.floor(Math.random() * 10);
    var myNumber12 = Math.floor(Math.random() * 10);
    var myNumber13 = Math.floor(Math.random() * 10);
    var myNumber = myNumber1.toString() + myNumber2.toString() + myNumber3.toString() + myNumber4.toString() + myNumber5.toString() + myNumber6.toString() + myNumber7.toString() + myNumber8.toString() + myNumber9.toString() + myNumber10.toString() + myNumber11.toString() + myNumber12.toString() + myNumber13.toString();
    //const starSystem = new StarSystem(myNumber)
    //console.log(JSON.stringify(starSystem, null, 2));
  }, [session?.user?.id]); */

export default function SocialGraphHomeNoSidebar () {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const [planetPosts, setPlanetPosts] = useState([]);

  useEffect(() => {
    // fetchPosts();
  }, [session?.user?.id]);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }

    supabase.from('profiles')
      .select()
      .eq('id', session?.user?.id)
      .then(result => {
        if (result.data.length) {
          setProfile(result.data);
        }
      })
  }, [session?.user?.id]); // Run it again if auth/session state changes

  function fetchPosts () {
    supabase.from('posts')
      .select('id, content, created_at, media, profiles(id, avatar_url, username)') // Reset id on testing playground server later
      .order('created_at', { ascending: false })
      .then( result => { setPosts(result.data); });

    supabase.from('posts_duplicates')
      .select('id, content, created_at, media, planets2, planetsss(id, temperature), profiles(id, avatar_url, full_name, username)') // Reset id on testing playground server later
      .order('created_at', { ascending: false })
      .then( result => { setPlanetPosts(result.data); });
    }

  return (
    <Layout hideNavigation={true}>
      <UserContext.Provider value={{profile}}> {/* Move this into `_app.tsx` later */}
        <PostFormCard onPost={fetchPosts} />
        {planetPosts?.length > 0 && planetPosts.map(post => (
          <PostCard key = { post.id } {...post} />
        ))}
        {/* {posts?.length > 0 && posts.map(post => (
          <PostCard key = { post.id } {...post} />
        ))} */}
      </UserContext.Provider>
    </Layout>
  );
}

export function SocialGraphHomeModal1 () {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const [planetPosts, setPlanetPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [session?.user?.id]);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }

    supabase.from('profiles')
      .select()
      .eq('id', session?.user?.id)
      .then(result => {
        if (result.data.length) {
          setProfile(result.data);
        }
      })
  }, [session?.user?.id]); // Run it again if auth/session state changes

  function fetchPosts () {
    // supabase.from('posts')
    //   .select('id, content, created_at, media, profiles(id, avatar_url, username)') // Reset id on testing playground server later
    //   .limit(2)
    //   .order('created_at', { ascending: false })
    //   .then( result => { setPosts(result.data); });

    supabase.from('posts_duplicates')
      .select('id, content, created_at, media, planets2, planetsss(id, temperature), profiles(id, avatar_url, full_name, username)')
      .limit(2)
      .order('created_at', { ascending: false })
      .then( result => { setPlanetPosts(result.data); });
  }

  function fetchProfile () {
    supabase.from('profiles')
      .select()
      .eq('id', session.user.id)
      .then(result => {
        if (result.data) {
          setProfile(result.data);
        }
    })
  }

  return (
    <Layout hideNavigation={true}>
      <UserContext.Provider value={{profile}}> {/* Move this into `_app.tsx` later */}
        {/* <PostFormCard onPost={fetchPosts} /> */}
        {planetPosts?.length > 0 && planetPosts.map(post => (
          <PostModal key = { post.id } {...post} />
        ))}
      </UserContext.Provider>
    </Layout>
  );
}