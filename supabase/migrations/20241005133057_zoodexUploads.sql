create table
  public.uploads (
    id bigint generated by default as identity,
    author uuid not null,
    location bigint not null,
    configuration jsonb null,
    source text not null,
    file_url text not null,
    created_at timestamp with time zone not null default now(),
    content text null,
    constraint uploads_pkey primary key (id),
    constraint uploads_author_fkey foreign key (author) references profiles (id) on delete cascade,
    constraint uploads_location_fkey foreign key (location) references anomalies (id) on delete cascade
  ) tablespace pg_default;