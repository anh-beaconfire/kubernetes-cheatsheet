window.SLIDES = [
  {
    "section": "Kubernetes Fundamentals",
    "slug": "kubernetes-fundamentals",
    "slides": [
      {
        "title": "Introduction, Best Practices, and Interview Prep",
        "path": "slides/kubernetes-fundamentals/01-introduction-cheat-sheet-best-practices-and-interview-reference.html"
      },
      {
        "title": "Course Goals",
        "path": "slides/kubernetes-fundamentals/02-course-goals.html"
      },
      {
        "title": "Docker Drawbacks",
        "path": "slides/kubernetes-fundamentals/03-docker-drawbacks.html"
      },
      {
        "title": "What Is Kubernetes?",
        "path": "slides/kubernetes-fundamentals/05-what-is-kubernetes.html"
      },
      {
        "title": "Why Do We Need Kubernetes?",
        "path": "slides/kubernetes-fundamentals/06-why-do-we-need-kubernetes.html"
      },
      {
        "title": "Docker vs Kubernetes",
        "path": "slides/kubernetes-fundamentals/07-docker-vs-kubernetes.html"
      },
      {
        "title": "Kubernetes Mental Model",
        "path": "slides/kubernetes-fundamentals/08-kubernetes-mental-model.html"
      }
    ]
  },
  {
    "section": "Architecture",
    "slug": "architecture",
    "slides": [
      {
        "title": "Cluster Architecture",
        "path": "slides/architecture/01-cluster-architecture.html"
      },
      {
        "title": "Control Plane Components",
        "path": "slides/architecture/02-control-plane-components.html"
      },
      {
        "title": "Worker Node Components",
        "path": "slides/architecture/03-worker-node-components.html"
      },
      {
        "title": "Declarative Model and Reconciliation",
        "path": "slides/architecture/04-declarative-model-and-reconciliation.html"
      }
    ]
  },
  {
    "section": "Object Basics",
    "slug": "object-basics",
    "slides": [
      {
        "title": "Kubernetes Object Anatomy",
        "path": "slides/object-basics/01-kubernetes-object-anatomy.html"
      },
      {
        "title": "Labels and Selectors",
        "path": "slides/object-basics/02-labels-and-selectors.html"
      },
      {
        "title": "Namespaces",
        "path": "slides/object-basics/03-namespaces.html"
      }
    ]
  },
  {
    "section": "Workloads",
    "slug": "workloads",
    "slides": [
      {
        "title": "Pod",
        "path": "slides/workloads/01-pod.html"
      },
      {
        "title": "Multi-Container Pod",
        "path": "slides/workloads/02-multi-container-pod.html"
      },
      {
        "title": "Deployment",
        "path": "slides/workloads/03-deployment.html"
      },
      {
        "title": "ReplicaSet",
        "path": "slides/workloads/04-replicaset.html"
      },
      {
        "title": "StatefulSet",
        "path": "slides/workloads/05-statefulset.html"
      },
      {
        "title": "DaemonSet",
        "path": "slides/workloads/06-daemonset.html"
      },
      {
        "title": "Job",
        "path": "slides/workloads/07-job.html"
      },
      {
        "title": "CronJob",
        "path": "slides/workloads/08-cronjob.html"
      },
      {
        "title": "Workload Recap",
        "path": "slides/workloads/09-workload-recap.html"
      }
    ]
  },
  {
    "section": "Networking",
    "slug": "networking",
    "slides": [
      {
        "title": "Kubernetes Networking Model",
        "path": "slides/networking/01-kubernetes-networking-model.html"
      },
      {
        "title": "Service",
        "path": "slides/networking/02-service.html"
      },
      {
        "title": "ClusterIP vs NodePort vs LoadBalancer",
        "path": "slides/networking/03-clusterip-vs-nodeport-vs-loadbalancer.html"
      },
      {
        "title": "Ingress",
        "path": "slides/networking/04-ingress.html"
      },
      {
        "title": "Request Flow: Internet to Pod",
        "path": "slides/networking/05-request-flow-internet-to-pod.html"
      },
      {
        "title": "Gateway API",
        "path": "slides/networking/06-gateway-api.html"
      },
      {
        "title": "DNS in Kubernetes",
        "path": "slides/networking/07-dns-in-kubernetes.html"
      },
      {
        "title": "NetworkPolicy",
        "path": "slides/networking/08-networkpolicy.html"
      },
      {
        "title": "Egress Traffic",
        "path": "slides/networking/09-egress-traffic.html"
      }
    ]
  },
  {
    "section": "Configuration and Security",
    "slug": "config-security",
    "slides": [
      {
        "title": "ConfigMap",
        "path": "slides/config-security/01-configmap.html"
      },
      {
        "title": "Secret",
        "path": "slides/config-security/02-secret.html"
      },
      {
        "title": "ServiceAccount",
        "path": "slides/config-security/03-serviceaccount.html"
      },
      {
        "title": "Kubernetes Security Layers",
        "path": "slides/config-security/04-kubernetes-security-layers.html"
      },
      {
        "title": "RBAC: Role and RoleBinding",
        "path": "slides/config-security/05-rbac-role-and-rolebinding.html"
      },
      {
        "title": "SecurityContext",
        "path": "slides/config-security/06-securitycontext.html"
      },
      {
        "title": "Image Security",
        "path": "slides/config-security/07-image-security.html"
      }
    ]
  },
  {
    "section": "Storage",
    "slug": "storage",
    "slides": [
      {
        "title": "Volume Basics",
        "path": "slides/storage/01-volume-basics.html"
      },
      {
        "title": "PersistentVolume and PersistentVolumeClaim",
        "path": "slides/storage/02-persistentvolume-and-persistentvolumeclaim.html"
      },
      {
        "title": "StorageClass",
        "path": "slides/storage/03-storageclass.html"
      }
    ]
  },
  {
    "section": "Scaling and Reliability",
    "slug": "scaling-reliability",
    "slides": [
      {
        "title": "Resource Requests and Limits",
        "path": "slides/scaling-reliability/01-resource-requests-and-limits.html"
      },
      {
        "title": "HorizontalPodAutoscaler",
        "path": "slides/scaling-reliability/02-horizontalpodautoscaler.html"
      },
      {
        "title": "Cluster Autoscaler vs HPA vs VPA",
        "path": "slides/scaling-reliability/03-cluster-autoscaler-vs-hpa-vs-vpa.html"
      },
      {
        "title": "Scheduling: NodeSelector, Affinity, Taints, Tolerations",
        "path": "slides/scaling-reliability/04-scheduling-nodeselector-affinity-taints-tolerations.html"
      },
      {
        "title": "PodDisruptionBudget",
        "path": "slides/scaling-reliability/05-poddisruptionbudget.html"
      },
      {
        "title": "Liveness, Readiness, Startup Probes",
        "path": "slides/scaling-reliability/06-liveness-readiness-startup-probes.html"
      },
      {
        "title": "Rolling Updates and Rollbacks",
        "path": "slides/scaling-reliability/07-rolling-updates-and-rollbacks.html"
      }
    ]
  },
  {
    "section": "Observability and Troubleshooting",
    "slug": "observability-troubleshooting",
    "slides": [
      {
        "title": "Observability Pillars",
        "path": "slides/observability-troubleshooting/01-observability-pillars.html"
      },
      {
        "title": "Logs",
        "path": "slides/observability-troubleshooting/02-logs.html"
      },
      {
        "title": "Metrics",
        "path": "slides/observability-troubleshooting/03-metrics.html"
      },
      {
        "title": "Events and Describe",
        "path": "slides/observability-troubleshooting/04-events-and-describe.html"
      },
      {
        "title": "Debugging a Failing Pod",
        "path": "slides/observability-troubleshooting/05-debugging-a-failing-pod.html"
      },
      {
        "title": "Debugging Service Connectivity",
        "path": "slides/observability-troubleshooting/06-debugging-service-connectivity.html"
      }
    ]
  },
  {
    "section": "kubectl Cheatsheet",
    "slug": "kubectl-cheatsheet",
    "slides": [
      {
        "title": "Context and Namespace Commands",
        "path": "slides/kubectl-cheatsheet/01-context-and-namespace-commands.html"
      },
      {
        "title": "Get and Inspect Resources",
        "path": "slides/kubectl-cheatsheet/02-get-and-inspect-resources.html"
      },
      {
        "title": "Apply, Edit, Delete",
        "path": "slides/kubectl-cheatsheet/03-apply-edit-delete.html"
      },
      {
        "title": "Logs, Exec, Port Forward",
        "path": "slides/kubectl-cheatsheet/04-logs-exec-port-forward.html"
      },
      {
        "title": "Rollouts and Scaling",
        "path": "slides/kubectl-cheatsheet/05-rollouts-and-scaling.html"
      }
    ]
  },
  {
    "section": "Packaging and Extensions",
    "slug": "packaging-extensions",
    "slides": [
      {
        "title": "Kustomize",
        "path": "slides/packaging-extensions/01-kustomize.html"
      },
      {
        "title": "Helm",
        "path": "slides/packaging-extensions/02-helm.html"
      },
      {
        "title": "CRDs and Operators",
        "path": "slides/packaging-extensions/03-crds-and-operators.html"
      }
    ]
  },
  {
    "section": "Best Practices",
    "slug": "best-practices",
    "slides": [
      {
        "title": "Application Deployment Best Practices",
        "path": "slides/best-practices/01-application-deployment-best-practices.html"
      },
      {
        "title": "Security Best Practices",
        "path": "slides/best-practices/02-security-best-practices.html"
      },
      {
        "title": "Reliability Best Practices",
        "path": "slides/best-practices/03-reliability-best-practices.html"
      },
      {
        "title": "Operational Best Practices",
        "path": "slides/best-practices/04-operational-best-practices.html"
      }
    ]
  },
  {
    "section": "Interview Questions",
    "slug": "interview-questions",
    "slides": [
      {
        "title": "Request Flow Interview Question",
        "path": "slides/interview-questions/01-request-flow-interview-question.html"
      },
      {
        "title": "Failing Pod Interview Question",
        "path": "slides/interview-questions/02-failing-pod-interview-question.html"
      },
      {
        "title": "CrashLoopBackOff",
        "path": "slides/interview-questions/03-crashloopbackoff.html"
      },
      {
        "title": "ImagePullBackOff",
        "path": "slides/interview-questions/04-imagepullbackoff.html"
      },
      {
        "title": "Service Not Working",
        "path": "slides/interview-questions/05-service-not-working.html"
      }
    ]
  },
  {
    "section": "Reference Summary",
    "slug": "reference-summary",
    "slides": [
      {
        "title": "Kubernetes Resource Map",
        "path": "slides/reference-summary/01-kubernetes-resource-map.html"
      },
      {
        "title": "Production Readiness Checklist",
        "path": "slides/reference-summary/02-production-readiness-checklist.html"
      },
      {
        "title": "Final Summary",
        "path": "slides/reference-summary/03-final-summary.html"
      }
    ]
  }
];
