import FeedPost from "../components/FeedPost";
import { PublicationMainFocus, PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";
import styles from '../styles/Home.module.css';
import { useState, useEffect } from "react";
import Sidebar from '../components/Navigation/Sidebar';
import { Flex, Text, IconButton } from '@chakra-ui/react';

// Off-chain Authentication components via Supabase
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import NavigationCard from "../components/Sidebar";

export default function Home () {
  // Off-chain authenticated user session (via Supabase)
  const session = useSession();
  const supabase = useSupabaseClient();

  const { isLoading, error, data } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.Latest,
      metadata: {
        //mainContentFocus: PublicationSortCriteria.Latest,
      }
    },
  },
  {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return (<div className={styles.container}>Loading</div>)
  };

  if (error) {
    return (<div className={styles.container}>Error</div>)
  };

  return (
    <Flex w='100%'>
      <Sidebar />
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <div className={styles.container}>
          <div className={styles.postsContainer}>
            {data?.explorePublications.items.map((publication) => (
              <FeedPost publication={publication} key={publication.id} />
            ))}
          </div>
        </div>
      </Flex>
    </Flex>
  );
};