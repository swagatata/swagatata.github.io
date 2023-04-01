# Quick Facts
1. kubernetes is open source
2. originally developed by Google Inc
3. kubernetes is an orchestration tool
4. deals with containerised applications

# Why Kubernetes?
Orchestration allows us to have applications which have
* high availability : lower and lower chances of applications being unavailable or offline
* scalability : easy or automatic load management. ex: run more containers when traffic is high
* fault tolerance : recovers automatically from a faulty state

# Kubernetes Concepts
1. Cluster
2. Control Pane (Master)
4. Nodes (Worker)
5. Kubectl
6. API Server
7. Controller Manager
8. Scheduler
9. etcd(KeyValue store)
10. Virtual Network
11. Pods
12. Pod-Service
13. Ingress

# Kubernetes Architecture
![Kubernetes Architecture](https://user-images.githubusercontent.com/235574/229316306-c4316319-d319-49a7-89c7-5b1bc1e6fbc9.png)


# Pods

Pods are the unit entities in kubernetes. They are usually an abstraction over containers. Each pod has its own virtual address(an IP address).

