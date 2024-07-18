create extension if not exists "vector" with schema "public" version '0.7.0';

create table "public"."anomalies" (
    "id" bigint generated by default as identity not null,
    "content" text,
    "anomalytype" text,
    "type" text,
    "classification_status" text,
    "avatar_url" text,
    "created_at" timestamp with time zone not null default now(),
    "deepnote" text,
    "configuration" jsonb,
    "parentAnomaly" bigint -- Add a value for the set the anomaly is in (e.g. expedition)
);


create table "public"."classifications" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "content" text,
    "author" uuid,
    "anomaly" bigint,
    "media" json,
    "classificationtype" text,
    "classificationConfiguration" jsonb
);


create table "public"."inventory" (
    "id" bigint generated by default as identity not null,
    "item" bigint,
    "owner" uuid,
    "quantity" double precision,
    "notes" text,
    "time_of_deploy" timestamp with time zone,
    "anomaly" bigint,
    "parentItem" bigint
);


create table "public"."missions" (
    "id" bigint generated by default as identity not null,
    "user" uuid,
    "time_of_completion" timestamp with time zone,
    "mission" bigint,
    "configuration" jsonb,
    "rewarded_items" bigint[]
);


create table "public"."profiles" (
    "id" uuid not null,
    "updated_at" timestamp with time zone,
    "username" text,
    "full_name" text,
    "avatar_url" text,
    "website" text,
    "location" bigint
);


alter table "public"."profiles" enable row level security;

create table "public"."sectors" (
    "id" bigint generated by default as identity not null,
    "anomaly" bigint,
    "deposit" bigint
);


create table "public"."user_anomalies" (
    "id" bigint generated by default as identity not null,
    "user_id" uuid not null,
    "anomaly_id" bigint not null,
    "ownership_date" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX baseplanets_pkey ON public.anomalies USING btree (id);

CREATE UNIQUE INDEX classifications_pkey ON public.classifications USING btree (id);

CREATE UNIQUE INDEX inventory_pkey ON public.inventory USING btree (id);

CREATE UNIQUE INDEX missions_pkey ON public.missions USING btree (id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username);

CREATE UNIQUE INDEX sectors_pkey ON public.sectors USING btree (id);

CREATE UNIQUE INDEX user_anomalies_pkey ON public.user_anomalies USING btree (id);

alter table "public"."anomalies" add constraint "baseplanets_pkey" PRIMARY KEY using index "baseplanets_pkey";

alter table "public"."classifications" add constraint "classifications_pkey" PRIMARY KEY using index "classifications_pkey";

alter table "public"."inventory" add constraint "inventory_pkey" PRIMARY KEY using index "inventory_pkey";

alter table "public"."missions" add constraint "missions_pkey" PRIMARY KEY using index "missions_pkey";

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."sectors" add constraint "sectors_pkey" PRIMARY KEY using index "sectors_pkey";

alter table "public"."user_anomalies" add constraint "user_anomalies_pkey" PRIMARY KEY using index "user_anomalies_pkey";

alter table "public"."anomalies" add constraint "anomalies_parentAnomaly_fkey" FOREIGN KEY ("parentAnomaly") REFERENCES anomalies(id) not valid;

alter table "public"."anomalies" validate constraint "anomalies_parentAnomaly_fkey";

alter table "public"."classifications" add constraint "classifications_anomaly_fkey" FOREIGN KEY (anomaly) REFERENCES anomalies(id) not valid;

alter table "public"."classifications" validate constraint "classifications_anomaly_fkey";

alter table "public"."classifications" add constraint "classifications_author_fkey" FOREIGN KEY (author) REFERENCES profiles(id) not valid;

alter table "public"."classifications" validate constraint "classifications_author_fkey";

alter table "public"."inventory" add constraint "inventory_anomaly_fkey" FOREIGN KEY (anomaly) REFERENCES anomalies(id) not valid;

alter table "public"."inventory" validate constraint "inventory_anomaly_fkey";

alter table "public"."inventory" add constraint "inventory_owner_fkey" FOREIGN KEY (owner) REFERENCES profiles(id) not valid;

alter table "public"."inventory" validate constraint "inventory_owner_fkey";

alter table "public"."inventory" add constraint "inventory_parentitem_fkey" FOREIGN KEY ("parentItem") REFERENCES inventory(id) not valid;

alter table "public"."inventory" validate constraint "inventory_parentitem_fkey";

alter table "public"."missions" add constraint "missions_user_fkey" FOREIGN KEY ("user") REFERENCES profiles(id) not valid;

alter table "public"."missions" validate constraint "missions_user_fkey";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";

alter table "public"."profiles" add constraint "profiles_location_fkey" FOREIGN KEY (location) REFERENCES anomalies(id) not valid;

alter table "public"."profiles" validate constraint "profiles_location_fkey";

alter table "public"."profiles" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";

alter table "public"."profiles" add constraint "username_length" CHECK ((char_length(username) >= 3)) not valid;

alter table "public"."profiles" validate constraint "username_length";

alter table "public"."sectors" add constraint "sectors_anomaly_fkey" FOREIGN KEY (anomaly) REFERENCES anomalies(id) not valid;

alter table "public"."sectors" validate constraint "sectors_anomaly_fkey";

alter table "public"."user_anomalies" add constraint "user_anomalies_anomaly_fkey" FOREIGN KEY (anomaly_id) REFERENCES anomalies(id) ON DELETE CASCADE not valid;

alter table "public"."user_anomalies" validate constraint "user_anomalies_anomaly_fkey";

alter table "public"."user_anomalies" add constraint "user_anomalies_user_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."user_anomalies" validate constraint "user_anomalies_user_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$function$
;

grant delete on table "public"."anomalies" to "anon";

grant insert on table "public"."anomalies" to "anon";

grant references on table "public"."anomalies" to "anon";

grant select on table "public"."anomalies" to "anon";

grant trigger on table "public"."anomalies" to "anon";

grant truncate on table "public"."anomalies" to "anon";

grant update on table "public"."anomalies" to "anon";

grant delete on table "public"."anomalies" to "authenticated";

grant insert on table "public"."anomalies" to "authenticated";

grant references on table "public"."anomalies" to "authenticated";

grant select on table "public"."anomalies" to "authenticated";

grant trigger on table "public"."anomalies" to "authenticated";

grant truncate on table "public"."anomalies" to "authenticated";

grant update on table "public"."anomalies" to "authenticated";

grant delete on table "public"."anomalies" to "service_role";

grant insert on table "public"."anomalies" to "service_role";

grant references on table "public"."anomalies" to "service_role";

grant select on table "public"."anomalies" to "service_role";

grant trigger on table "public"."anomalies" to "service_role";

grant truncate on table "public"."anomalies" to "service_role";

grant update on table "public"."anomalies" to "service_role";

grant delete on table "public"."classifications" to "anon";

grant insert on table "public"."classifications" to "anon";

grant references on table "public"."classifications" to "anon";

grant select on table "public"."classifications" to "anon";

grant trigger on table "public"."classifications" to "anon";

grant truncate on table "public"."classifications" to "anon";

grant update on table "public"."classifications" to "anon";

grant delete on table "public"."classifications" to "authenticated";

grant insert on table "public"."classifications" to "authenticated";

grant references on table "public"."classifications" to "authenticated";

grant select on table "public"."classifications" to "authenticated";

grant trigger on table "public"."classifications" to "authenticated";

grant truncate on table "public"."classifications" to "authenticated";

grant update on table "public"."classifications" to "authenticated";

grant delete on table "public"."classifications" to "service_role";

grant insert on table "public"."classifications" to "service_role";

grant references on table "public"."classifications" to "service_role";

grant select on table "public"."classifications" to "service_role";

grant trigger on table "public"."classifications" to "service_role";

grant truncate on table "public"."classifications" to "service_role";

grant update on table "public"."classifications" to "service_role";

grant delete on table "public"."inventory" to "anon";

grant insert on table "public"."inventory" to "anon";

grant references on table "public"."inventory" to "anon";

grant select on table "public"."inventory" to "anon";

grant trigger on table "public"."inventory" to "anon";

grant truncate on table "public"."inventory" to "anon";

grant update on table "public"."inventory" to "anon";

grant delete on table "public"."inventory" to "authenticated";

grant insert on table "public"."inventory" to "authenticated";

grant references on table "public"."inventory" to "authenticated";

grant select on table "public"."inventory" to "authenticated";

grant trigger on table "public"."inventory" to "authenticated";

grant truncate on table "public"."inventory" to "authenticated";

grant update on table "public"."inventory" to "authenticated";

grant delete on table "public"."inventory" to "service_role";

grant insert on table "public"."inventory" to "service_role";

grant references on table "public"."inventory" to "service_role";

grant select on table "public"."inventory" to "service_role";

grant trigger on table "public"."inventory" to "service_role";

grant truncate on table "public"."inventory" to "service_role";

grant update on table "public"."inventory" to "service_role";

grant delete on table "public"."missions" to "anon";

grant insert on table "public"."missions" to "anon";

grant references on table "public"."missions" to "anon";

grant select on table "public"."missions" to "anon";

grant trigger on table "public"."missions" to "anon";

grant truncate on table "public"."missions" to "anon";

grant update on table "public"."missions" to "anon";

grant delete on table "public"."missions" to "authenticated";

grant insert on table "public"."missions" to "authenticated";

grant references on table "public"."missions" to "authenticated";

grant select on table "public"."missions" to "authenticated";

grant trigger on table "public"."missions" to "authenticated";

grant truncate on table "public"."missions" to "authenticated";

grant update on table "public"."missions" to "authenticated";

grant delete on table "public"."missions" to "service_role";

grant insert on table "public"."missions" to "service_role";

grant references on table "public"."missions" to "service_role";

grant select on table "public"."missions" to "service_role";

grant trigger on table "public"."missions" to "service_role";

grant truncate on table "public"."missions" to "service_role";

grant update on table "public"."missions" to "service_role";

grant delete on table "public"."profiles" to "anon";

grant insert on table "public"."profiles" to "anon";

grant references on table "public"."profiles" to "anon";

grant select on table "public"."profiles" to "anon";

grant trigger on table "public"."profiles" to "anon";

grant truncate on table "public"."profiles" to "anon";

grant update on table "public"."profiles" to "anon";

grant delete on table "public"."profiles" to "authenticated";

grant insert on table "public"."profiles" to "authenticated";

grant references on table "public"."profiles" to "authenticated";

grant select on table "public"."profiles" to "authenticated";

grant trigger on table "public"."profiles" to "authenticated";

grant truncate on table "public"."profiles" to "authenticated";

grant update on table "public"."profiles" to "authenticated";

grant delete on table "public"."profiles" to "service_role";

grant insert on table "public"."profiles" to "service_role";

grant references on table "public"."profiles" to "service_role";

grant select on table "public"."profiles" to "service_role";

grant trigger on table "public"."profiles" to "service_role";

grant truncate on table "public"."profiles" to "service_role";

grant update on table "public"."profiles" to "service_role";

grant delete on table "public"."sectors" to "anon";

grant insert on table "public"."sectors" to "anon";

grant references on table "public"."sectors" to "anon";

grant select on table "public"."sectors" to "anon";

grant trigger on table "public"."sectors" to "anon";

grant truncate on table "public"."sectors" to "anon";

grant update on table "public"."sectors" to "anon";

grant delete on table "public"."sectors" to "authenticated";

grant insert on table "public"."sectors" to "authenticated";

grant references on table "public"."sectors" to "authenticated";

grant select on table "public"."sectors" to "authenticated";

grant trigger on table "public"."sectors" to "authenticated";

grant truncate on table "public"."sectors" to "authenticated";

grant update on table "public"."sectors" to "authenticated";

grant delete on table "public"."sectors" to "service_role";

grant insert on table "public"."sectors" to "service_role";

grant references on table "public"."sectors" to "service_role";

grant select on table "public"."sectors" to "service_role";

grant trigger on table "public"."sectors" to "service_role";

grant truncate on table "public"."sectors" to "service_role";

grant update on table "public"."sectors" to "service_role";

grant delete on table "public"."user_anomalies" to "anon";

grant insert on table "public"."user_anomalies" to "anon";

grant references on table "public"."user_anomalies" to "anon";

grant select on table "public"."user_anomalies" to "anon";

grant trigger on table "public"."user_anomalies" to "anon";

grant truncate on table "public"."user_anomalies" to "anon";

grant update on table "public"."user_anomalies" to "anon";

grant delete on table "public"."user_anomalies" to "authenticated";

grant insert on table "public"."user_anomalies" to "authenticated";

grant references on table "public"."user_anomalies" to "authenticated";

grant select on table "public"."user_anomalies" to "authenticated";

grant trigger on table "public"."user_anomalies" to "authenticated";

grant truncate on table "public"."user_anomalies" to "authenticated";

grant update on table "public"."user_anomalies" to "authenticated";

grant delete on table "public"."user_anomalies" to "service_role";

grant insert on table "public"."user_anomalies" to "service_role";

grant references on table "public"."user_anomalies" to "service_role";

grant select on table "public"."user_anomalies" to "service_role";

grant trigger on table "public"."user_anomalies" to "service_role";

grant truncate on table "public"."user_anomalies" to "service_role";

grant update on table "public"."user_anomalies" to "service_role";

create policy "Public profiles are viewable by everyone."
on "public"."profiles"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."profiles"
as permissive
for update
to public
using ((auth.uid() = id));



create schema if not exists "vecs";

create table "vecs"."image_vectors" (
    "id" character varying not null,
    "vec" vector(512) not null,
    "metadata" jsonb not null default '{}'::jsonb
);


CREATE UNIQUE INDEX image_vectors_pkey ON vecs.image_vectors USING btree (id);

CREATE INDEX ix_vector_cosine_ops_hnsw_m16_efc64_8291b92 ON vecs.image_vectors USING hnsw (vec vector_cosine_ops) WITH (m='16', ef_construction='64');

alter table "vecs"."image_vectors" add constraint "image_vectors_pkey" PRIMARY KEY using index "image_vectors_pkey";


