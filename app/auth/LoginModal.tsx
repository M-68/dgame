"use client";

import { ReactNode } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { MicroscopeIcon, CodeIcon, FilesIcon } from "lucide-react";
import { Flexbox } from 'react-layout-kit';
import { createStyles } from 'antd-style';
import { rgba } from 'polished';

interface AuthPageProps {
  children: ReactNode;
};

const useStyles = createStyles(({ css, token }) => {
    return { // color: ${rgba(token.colorText, 0.8)};
      desc: css`
        font-size: min(24px, 4vw);
        font-weight: 400;
        text-align: center;
        text-wrap: balance;
      `,
      title: css`
        margin-block-end: 0;
  
        font-size: min(56px, 7vw);
        font-weight: 800;
        line-height: 1;
        text-align: center;
        text-wrap: balance;
      `,
    };
});

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-gray-800">Star Sailors</a>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="https://twitter.com/TheMrScrooby" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Updates</a>
          </Link>
          <Link href="https://github.com/signal-k" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">We're open-source!</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

function SupabaseAuthWrapper({ children }: { children: ReactNode }) {
    const { styles } = useStyles();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Panel */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-100 p-10">
          <div className="w-full h-full relative">
            <Image
              src="https://qwbufbmxkjfaikoloudl.supabase.co/storage/v1/object/public/media/garden.png"
              alt="Application UI"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
        {/* Right Panel */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 bg-white">
        <Flexbox
        align={'center'}
        as={'h1'}
        className={styles.title}
        gap={16}
        horizontal
        justify={'center'}
        wrap={'wrap'}
      >
        <strong className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-200 to-amber-300" style={{ fontSize: 'min(56px, 8vw)' }}>Star Sailors</strong>
        </Flexbox>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">Explore the cosmos & catalogue discoveries in different scientific disciplines</p>
          <div className="max-w-md w-full mx-auto py-5">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthPage({ children }: AuthPageProps) {
  return <SupabaseAuthWrapper>{children}</SupabaseAuthWrapper>;
}

export default function LoginPage() {
  const supabase = useSupabaseClient();

  return (
    <AuthPage>
      <Auth
        supabaseClient={supabase}
        providers={["google"]}
        socialLayout="horizontal"
        theme="light"
      />
              <div className="flex flex-col gap-2 py-6">
                            {/* <h3 className="text-lg font-bold text-nord-4 dark:text-nord-6">Connect</h3> */}
                            <Link href="https://threads.net/droidology" className="flex items-center gap-2 hover:underline text-nord-3 dark:text-nord-5" prefetch={false}>
                                <MicroscopeIcon className="h-5 w-5 text-nord-3 dark:text-nord-5" />
                                Threads
                            </Link>
                            <Link href="https://github.com/signal-k" className="flex items-center gap-2 hover:underline text-nord-3 dark:text-nord-5" prefetch={false}>
                                <CodeIcon className="h-5 w-5 text-nord-3 dark:text-nord-5" />
                                Github
                            </Link>
                            <Link href="https://github.com/signal-k/manuscript" className="flex items-center gap-2 hover:underline text-nord-3 dark:text-nord-5" prefetch={false}>
                                <FilesIcon className="h-5 w-5 text-nord-3 dark:text-nord-5" />
                                Documentation
                            </Link>
                            </div>
    </AuthPage>
  );
};