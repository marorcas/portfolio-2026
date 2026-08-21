export const journalEntries = [
  {
    date: "2026-07-31",
    content: "There was an invalid SSL certificate error on this site (526). Switching the SSL setting to a different option and then re-switching it back to the original setting in Cloudflare fixed it. Might have been a caching issue and doing this forced it to revalidate. Learned this certificate is like an ID for a site so it can securely connect to a browser using HTTPS. My setup for this site actually uses two SSL certificates because I have a custom domain that is managed by Cloudflare and my site is hosted by Github Pages. So when someone access my site on a browser, a connecton is created with Cloudflare, then Cloudflare creates a connection with Github Pages to get the content. Github Pages is what serves my site, so it's called an origin server. Cloudflare sits in front of Github Pages and it's called a reverse proxy."
  },
  {
    date: "2026-08-09",
    content: "I learned about fluentbit-gke, a logging workload for Google Kubernetes Engine that collects logs from containers that run on a node and then sends them to logging system, for example Google Cloud Logging. Fluentbit-gke is what's called a DaemonSet, which is a controller that instructs Kubernetes to run a copy of a pod for its workload on every available node in a cluster. A controller is an object in Kubernetes that manaages a desired state of a workload. Other examples of controllers are Deployments, which manage the number of copies (replicas) of a workload."
  },
  {
    date:"2026-08-19",
    content: "A sidecar is a container that runs in the same pod as another container. It is a support container to this other container (which is the main container)."
  },
  {
    date: "2026-08-21",
    content: "Telemetry refers to data that is generated from an app or system to understand how its behaviour and health. There are 3 main types of telemetry: metrics, logs and traces. Metrics are numerical data over time, for example resource usage. Logs describe events that happen in the system or app. Traces show how traffic moves within the system or app."
  }
];