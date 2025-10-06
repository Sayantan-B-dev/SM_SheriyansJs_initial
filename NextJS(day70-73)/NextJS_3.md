# Handling “Page Not Found” in Next.js (`not-found.js`)

Next.js provides a **built-in way to handle 404 pages** in the **App Router** using a special file called `not-found.js`. This replaces the older `_error.js` or custom routing logic for missing pages.

---

## **1. File Location**

* **Global 404** (applies to the entire app):

```
app/
└── not-found.js
```

* **Nested 404** (applies only to a specific folder):

```
app/dashboard/
├── layout.js
└── not-found.js
```

> Nested `not-found.js` only handles unknown routes **within its folder**.
> Global `not-found.js` handles everything else.

---

## **2. Basic Global 404 Page**

```jsx
// app/not-found.js
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <a href="/" className="mt-4 text-blue-600 hover:underline">
        Go back home
      </a>
    </div>
  );
}
```

* Automatically rendered for **any undefined route**.
* No special routing configuration needed.

---

## **3. Using `notFound()` Function for Programmatic 404**

Next.js also provides a helper `notFound()` to trigger a 404 programmatically in **server components**.

```jsx
// app/dashboard/[userId]/page.js
import { notFound } from 'next/navigation';

export default async function UserPage({ params }) {
  const userId = params.userId;

  const user = await getUserFromDatabase(userId);

  if (!user) {
    // Automatically renders `not-found.js` page
    notFound();
  }

  return <div>Welcome, {user.name}</div>;
}
```

**Notes:**

* Works **only in server components** (`page.js` without `"use client"`).
* Automatically falls back to the nearest `not-found.js` file (nested or global).

---

## **4. Nested 404 Example**

```
app/dashboard/
├── layout.js
├── page.js            // /dashboard
├── not-found.js       // 404 only for /dashboard/* routes
└── [userId]/
    └── page.js        // /dashboard/:userId
```

* `/dashboard/unknown` → renders `app/dashboard/not-found.js`
* `/dashboard/123` → renders user page if exists, otherwise can call `notFound()`.

---

## **5. Key Points**

1. **Automatic 404 handling**: Any undefined route triggers `not-found.js`.
2. **Nested 404 pages**: Localize 404 handling for specific sections.
3. **Programmatic 404**: Call `notFound()` in server components when data is missing.
4. **Server + Client awareness**:

   * `not-found.js` works for both SSR and client-side navigation.
   * `"use client"` is not needed for `not-found.js`.
5. **SEO-friendly**: Next.js automatically returns **HTTP 404 status**.

---

## **6. Example With Layout + Not Found**

```jsx
// app/dashboard/layout.js
import Navbar from '@/components/ui/Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

// app/dashboard/not-found.js
export default function DashboardNotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Dashboard Page Not Found</h1>
      <p className="mt-2">This dashboard route does not exist.</p>
    </div>
  );
}
```

* `/dashboard/unknown` → Shows **Dashboard-specific 404**
* `/unknown-route` → Shows **global `app/not-found.js`**

---

This approach is the **recommended way in Next.js App Router** to handle **default 404 pages**, **nested 404s**, and **programmatic 404 handling**.

---

# **Default Files and Special Terms in Next.js App Router**

Next.js App Router introduces **conventions** with specific filenames that automatically define routing, layouts, metadata, error handling, and more. Understanding these files is essential for building robust Next.js applications.

---

## **1. `page.js`**

* **Purpose:** Represents the **main content of a route**.
* **Location:** Every folder can have one `page.js` which maps to the folder path.
* **Behavior:**

  * If folder is `app/about/`, then `page.js` → `/about`
  * Can be **client component** (`"use client"`) or **server component** (default)
* **Example:**

```jsx
// app/about/page.js
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

---

## **2. `layout.js`**

* **Purpose:** Defines a **persistent layout** that wraps all `page.js` and nested routes in a folder.
* **Location:** Can exist in any folder (root, nested)
* **Behavior:**

  * Supports nested layouts. Outer layouts wrap inner layouts.
  * Can include **navigation, sidebar, footer, etc.**
* **Example:**

```jsx
// app/dashboard/layout.js
import Navbar from '@/components/ui/Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
```

---

## **3. `not-found.js`**

* **Purpose:** Default 404 page for **undefined routes**.
* **Behavior:**

  * Can exist globally (`app/not-found.js`) or nested (`app/dashboard/not-found.js`)
  * Programmatically trigger with `notFound()` in server components
* **Example:**

```jsx
// app/not-found.js
export default function NotFound() {
  return <h1>404 – Page Not Found</h1>;
}
```

---

## **4. `loading.js`**

* **Purpose:** Shows a **loading state** while server components fetch data or during route transitions.
* **Location:** Optional; can exist in any folder
* **Behavior:** Automatically renders when parent route is loading.
* **Example:**

```jsx
// app/dashboard/loading.js
export default function Loading() {
  return <p>Loading dashboard...</p>;
}
```

---

## **5. `error.js`**

* **Purpose:** Displays **error UI** if a route or layout throws an exception.
* **Location:** Optional; nested or global
* **Behavior:** Catches errors for its folder and children.
* **Example:**

```jsx
// app/dashboard/error.js
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

---

## **6. `head.js`**

* **Purpose:** Adds **metadata** for the route (title, meta tags, Open Graph, etc.)
* **Location:** Optional, per folder
* **Example:**

```jsx
// app/about/head.js
export default function Head() {
  return (
    <>
      <title>About Us</title>
      <meta name="description" content="Learn more about us." />
    </>
  );
}
```

---

## **7. `template.js`**

* **Purpose:** Alternative layout for a route that **does not persist state** between navigations.
* **Difference from `layout.js`:**

  * `layout.js` is **persistent**
  * `template.js` **remounts children every navigation**
* **Example:**

```jsx
// app/dashboard/template.js
export default function DashboardTemplate({ children }) {
  return <div className="dashboard-template">{children}</div>;
}
```

---

## **8. `error.js` + `loading.js` + `not-found.js` in Nested Routes**

* **Nested Handling:** Each folder can have its own versions of these files to **localize behavior**:

  ```
  app/
  └── dashboard/
      ├── layout.js
      ├── page.js
      ├── loading.js
      ├── error.js
      └── not-found.js
  ```

* Example:

  * `/dashboard/unknown` → `dashboard/not-found.js`
  * `/dashboard/page` errors → `dashboard/error.js`
  * `/dashboard` loading data → `dashboard/loading.js`

---

## **9. Other Important Terms/Files**

| File/Term                           | Purpose                                                                |
| ----------------------------------- | ---------------------------------------------------------------------- |
| `globals.css`                       | Global CSS file, imported in `layout.js`                               |
| `favicon.ico`                       | Default favicon in `app/` folder                                       |
| `[param]`                           | Dynamic route segment, accessed via `useParams()`                      |
| `[[...slug]]`                       | Optional catch-all dynamic route for arbitrary depth                   |
| `route.js`                          | Auto-generated file for internal Next.js routing, not manually created |
| `page_client-reference-manifest.js` | Internal Next.js reference mapping for client/server components        |
| `loading.tsx/jsx`                   | TypeScript/JS version of `loading.js`                                  |

---

## **10. How They Work Together**

```
Route URL Example: /dashboard/123/projects/456

Files Used:
- app/layout.js                   → wraps all pages
- app/dashboard/layout.js         → wraps dashboard routes
- app/dashboard/[userId]/layout.js → wraps user-specific pages
- app/dashboard/[userId]/page.js  → renders /dashboard/123
- app/dashboard/[userId]/projects/page.js → renders projects list
- app/dashboard/[userId]/projects/[projectId]/page.js → renders specific project
- app/dashboard/[userId]/projects/[projectId]/tasks/[taskId]/page.js → renders task
- Any missing route → nearest not-found.js
- During loading → nearest loading.js
- On error → nearest error.js
```

**Key Concept:**

* **`page.js` = route content**
* **`layout.js` = persistent wrapper**
* **`not-found.js` = 404 handler**
* **`loading.js` = skeleton/loading state**
* **`error.js` = error boundary**
* **`head.js` = metadata**
* **`template.js` = non-persistent layout**

---

This **file-based approach** allows **automatic routing, SSR/SSG, dynamic routes, nested layouts, and error/loading handling** without manually configuring routes or using React Router.

---

# **Global vs Local JS and Data Fetching in Next.js vs React**

Next.js and React handle **data fetching** and **JS code scoping** differently. Understanding **global vs local JS**, and **data fetching strategies**, is crucial for building optimized apps.

---

## **1. Global JS vs Local JS**

### **Global JS**

* **Definition:** Code that is loaded **once** and available throughout the entire app.
* **In Next.js:**

  * Usually placed in `app/layout.js` or imported in `globals.css` (for JS, can import scripts globally)
  * Can include global state (e.g., via **React Context**, Redux, Zustand)
* **Example:**

```jsx
// app/layout.js
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* main page content */}
        <Footer />
      </body>
    </html>
  );
}
```

* `Navbar`, `Footer`, global event listeners, or shared utilities are **loaded once**.

---

### **Local JS**

* **Definition:** Code that runs **only in a specific component or page**.
* **In Next.js:**

  * Code inside `page.js`, component files, or hooks is **local**.
  * Useful for **per-page logic, state, or event handlers**.
* **Example:**

```jsx
// app/dashboard/page.js
"use client";
import { useState } from 'react';

export default function DashboardPage() {
  const [count, setCount] = useState(0); // local state

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
```

---

## **2. Data Fetching in Next.js**

Next.js provides **different approaches depending on server/client context**:

### **A. Server-Side Data Fetching (Server Components)**

* Default `page.js` is **server component** (no `"use client"` needed)
* Fetch data **before rendering** on the server
* **SEO-friendly and fast** (SSR)

```jsx
// app/dashboard/page.js
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function DashboardPage() {
  const posts = await getData(); // server fetch

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Notes:**

* No `useEffect` needed
* Data is fetched **on the server** before page loads
* Supports **static generation (SSG)** if fetch is inside a page with caching

---

### **B. Client-Side Data Fetching**

* For **interactive pages** or components with changing data
* Requires `"use client"` and React hooks like `useEffect`, `useState`

```jsx
"use client";
import { useEffect, useState } from 'react';

export default function UserComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]); // refetch when userId changes

  if (!user) return <p>Loading...</p>;

  return <div>{user.name}</div>;
}
```

* Useful for **dynamic updates**, dropdowns, or components whose data changes **on client interactions**.

---

### **C. Fetching in Nested Components**

* You can **fetch data locally** inside components:

```jsx
function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then(setComments);
  }, [postId]);

  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.body}</li>
      ))}
    </ul>
  );
}
```

* Each nested component fetches its **own data independently**.
* In **Next.js**, nested components can also be **server components** if no `"use client"` is used.

---

### **D. Differences from React JS**

| Feature              | React JS                                   | Next.js (App Router)                                    |
| -------------------- | ------------------------------------------ | ------------------------------------------------------- |
| Server-Side Fetching | Not built-in                               | Default page.js is server component → fetch server-side |
| Client-Side Fetching | `useEffect`                                | `"use client"` + hooks like `useEffect`, `useState`     |
| SEO                  | Requires SSR setup (Next.js or frameworks) | SSR/SSG built-in, automatically SEO-friendly            |
| Routing              | `react-router-dom`                         | File-based routing (`page.js`)                          |
| Nested Layouts       | Manual composition                         | Nested `layout.js` automatically wraps children         |
| Data Caching         | Manual setup                               | `fetch` supports `{ cache: 'force-cache' }` for SSG     |

---

### **3. Fetching with Page Changes**

* **React:** You often fetch data **on route change** using `useEffect` or `componentDidMount`.
* **Next.js:**

  * If server component (`page.js`), fetch happens **on server before rendering**
  * If client component, fetch happens **on client** (with `useEffect`) and can **react to props or route params**

Example with changing route param:

```jsx
"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Post() {
  const params = useParams(); // dynamic route like /blog/[id]
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => res.json())
      .then(setPost);
  }, [params.id]);

  if (!post) return <p>Loading...</p>;

  return <div>{post.title}</div>;
}
```

* Updates automatically when **route changes** (`params.id` changes)
* Combines **dynamic routing + client-side fetching**

---

### **4. Best Practices in Next.js**

1. **Use Server Components for static/fetch-on-load pages**

   * Faster, SEO-friendly
2. **Use Client Components for interactive, dynamic data**

   * `"use client"` + `useEffect`
3. **Separate global vs local state**

   * Global state in context providers, Redux, or Zustand
   * Local state in component itself
4. **Nested Components can fetch their own data**

   * Keeps each component independent
5. **Use caching strategies**

   * `fetch(url, { cache: 'force-cache' })` → SSG
   * `fetch(url, { cache: 'no-store' })` → always fresh SSR

---

Next, I can make a **diagram showing global vs local JS + server vs client data fetching flow** in a Next.js app with multiple nested components so it’s easy to visualize.

---

---

# **Rendering Images and Media in Next.js**

Next.js provides a **specialized `Image` component** and other tools for handling images and media efficiently. Using these improves **performance, SEO, and user experience**.

---

## **1. Next.js `<Image>` Component**

Next.js replaces the standard HTML `<img>` tag with its optimized `<Image>` component:

```jsx
import Image from 'next/image';

export default function MyComponent() {
  return (
    <div>
      <h1>My Next.js Image</h1>
      <Image
        src="/vercel.svg"       // can be from /public or external
        alt="Vercel Logo"
        width={200}             // required
        height={200}            // required
      />
    </div>
  );
}
```

**Key Features:**

1. **Automatic Optimization**

   * Generates multiple image sizes for different devices
   * Serves WebP/AVIF formats automatically if supported
2. **Lazy Loading**

   * Images load only when they appear in the viewport
   * Improves performance and speed metrics
3. **Responsive Images**

   * Can use `fill` mode with CSS to adapt images to container
4. **Caching**

   * Next.js automatically caches optimized images for performance

---

## **2. Using Images from the `public` Folder**

* All files in `public/` are served **as-is**.
* Example:

```
public/
├── logo.png
├── banner.jpg
```

```jsx
<Image src="/logo.png" width={100} height={100} alt="Logo" />
```

* Path `/logo.png` maps directly to `public/logo.png`
* No import needed for static assets in `public/`

---

## **3. Importing Images Directly**

Next.js also supports **importing images as modules** (requires Webpack support):

```jsx
import logo from '@/public/logo.png';
import Image from 'next/image';

export default function Header() {
  return <Image src={logo} alt="Logo" width={150} height={150} />;
}
```

* Benefits:

  * Type safety in TypeScript
  * Can use image `src` as JS variable
* Works for **SVG, PNG, JPG, WebP, GIF**

---

## **4. Responsive Images with Layout `fill`**

{% raw %}
<div style={{ width: '100%', height: '300px', position: 'relative' }}>
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill                  // fills parent div
    style={{ objectFit: 'cover' }} // cover, contain, etc.
  />
</div>
{% endraw %}

* **`fill`** mode removes need to set fixed width/height
* **`objectFit`** controls how image scales

---

## **5. External Images**

* To use images from another domain, add **`next.config.js` remote patterns**:

```js
// next.config.js
export default {
  images: {
    domains: ['images.unsplash.com'],
  },
};
```

```jsx
<Image
  src="https://images.unsplash.com/photo-123"
  width={600}
  height={400}
  alt="Unsplash"
/>
```

* Next.js will optimize and cache these external images

---

## **6. SVG Images**

* SVG can be imported as **React components**:

```jsx
import Logo from '@/public/logo.svg';

export default function Header() {
  return <Logo width={100} height={100} />;
}
```

* Alternatively, use `<Image>` for static rendering if no interactivity is needed.

---

## **7. Videos and Other Media**

Next.js does not have a specialized video component, but you can use **HTML `<video>`**:

```jsx
<video width="600" controls>
  <source src="/sample-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

* Place media files in `/public/` for direct URL access
* For large media, consider **streaming or external CDNs** for performance

---

## **8. Benefits of Next.js Image Optimization**

1. **Performance**

   * Reduced image sizes, responsive serving, lazy loading
2. **SEO**

   * Faster Largest Contentful Paint (LCP) → better Lighthouse score
3. **Automatic WebP/AVIF conversion**
4. **CDN-friendly**

   * Works with Vercel Image CDN out-of-the-box

---

## **9. Example Combined Component**

{% raw %}
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to Next.js</h1>
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <Image
          src="/banner.jpg"
          alt="Hero Banner"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
{% endraw %}

* Optimized for **all devices**
* Lazy loads
* SEO-friendly
* Works with **layouts** and SSR

---

Next.js also allows **image placeholders**, blur-up effects, and **priority images** for LCP optimization:

```jsx
<Image
  src="/banner.jpg"
  width={1200}
  height={600}
  alt="Banner"
  placeholder="blur"
  blurDataURL="/banner-blur.jpg"
  priority // preloads for LCP
/>
```

---

This is the **recommended way to render images and media** in Next.js for **performance, SEO, and user experience**.

---

---

# **Data Fetching Through APIs in Next.js (App Router)**

Next.js provides **multiple strategies** to fetch data from APIs depending on whether you are using **server components**, **client components**, **dynamic routes**, or want **static generation**. Here’s a complete breakdown.

---

## **1. Server-Side Data Fetching (Server Components)**

* Default `page.js` in App Router is a **server component**.
* Fetching happens **on the server before rendering**.
* SEO-friendly and fast.
* Can fetch from **internal or external APIs**.

### **Example: Fetch from external API**

```jsx
// app/dashboard/page.js
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Notes:**

* No `useEffect` needed.
* Can combine with **dynamic routes** (`params`) to fetch specific data.

---

## **2. Client-Side Data Fetching**

* Necessary for **interactive or dynamic components**.
* Requires `"use client"` directive.
* Uses React hooks like `useEffect` and `useState`.

### **Example: Client component fetching**

```jsx
"use client";
import { useState, useEffect } from "react";

export default function UserComponent({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  return <div>{user.name}</div>;
}
```

**Notes:**

* Works when **data changes with client interaction**.
* Must handle **loading/error states manually**.

---

## **3. Fetching for Dynamic Routes**

* Dynamic routes use **folder `[param]`**.
* Fetch server-side data using `params`.

```jsx
// app/posts/[postId]/page.js
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

* For **client components**, fetch inside `useEffect` as usual and read `useParams()`.

---

## **4. Incremental Static Regeneration (ISR)**

* Next.js allows **static generation with periodic revalidation**.
* Use `fetch` with `{ next: { revalidate: seconds } }`:

```jsx
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 } // cache for 60 seconds
});
```

* Page is **pre-rendered at build time** but **updates automatically** every `n` seconds.
* Great for SEO + partially dynamic content.

---

## **5. Using Internal API Routes**

Next.js allows **API routes** under `app/api` (App Router) or `pages/api` (Pages Router).

* Good for **server-side logic** or **proxying external APIs**.

### **Example: API Route**

```
app/api/posts/route.js
```

```jsx
export async function GET(request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

### **Fetch from API Route in Page**

```jsx
// app/dashboard/page.js
async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  return res.json();
}
```

---

## **6. Client + Server Hybrid**

* Server Component fetches **initial data** for SEO
* Client Component fetches **interactive/updating data**

```jsx
// app/dashboard/page.js (server component)
import UsersList from './UsersList'; // client component

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function DashboardPage() {
  const users = await getUsers();
  return <UsersList initialUsers={users} />;
}

// UsersList.js (client component)
"use client";
import { useState, useEffect } from 'react';

export default function UsersList({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    }, 60000); // update every 60s

    return () => clearInterval(interval);
  }, []);

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

* Initial render **server-side** → SEO-friendly
* Updates **client-side** → dynamic content

---

## **7. Error Handling**

* Use **`try/catch`** or **error boundaries** (`error.js`) for API fetches.

```jsx
try {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) throw new Error('Failed to fetch');
} catch (error) {
  notFound(); // or render fallback
}
```

* `notFound()` triggers **`not-found.js`** page automatically.

---

## **8. Fetch Options**

| Option                        | Description                              |
| ----------------------------- | ---------------------------------------- |
| `{ cache: 'no-store' }`       | Always fetch fresh data (SSR)            |
| `{ next: { revalidate: 60 }}` | Fetch and cache for 60 seconds (ISR/SSG) |
| `{ headers: { ... } }`        | Add custom headers for authentication    |
| `{ method: 'POST' }`          | Fetch POST data from API                 |

---

## **9. Summary of Fetching Strategies**

| Strategy                    | Where Used               | Pros                                    | Cons                                   |
| --------------------------- | ------------------------ | --------------------------------------- | -------------------------------------- |
| Server-side fetch (default) | page.js (server)         | SEO-friendly, fast, no client JS needed | Cannot access client events directly   |
| Client-side fetch           | `"use client"` component | Dynamic, interactive UI                 | Slower first render, SEO not automatic |
| ISR                         | server fetch             | Static + periodic update                | Slight delay in fresh data             |
| API routes                  | app/api or pages/api     | Server-side logic, data proxy           | Extra layer, may need authentication   |
| Hybrid                      | Server + Client          | Best of both worlds                     | More complex code                      |

---

This setup allows **Next.js apps** to:

* Be **SEO-friendly**
* Serve **fast initial HTML**
* Update **dynamic data** on the client
* Handle **errors and missing data gracefully**
* Optimize **performance with caching & revalidation**

---
