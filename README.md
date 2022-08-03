# how to run
```bash
cd infra
eksctl create cluster --config-file=cluster.yaml
cd ..


# ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

brew install argocd # install argocd cli

# Change the argocd-server service type to LoadBalancer
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'

# port forward
kubectl port-forward svc/argocd-server -n argocd 8080:443

# get password
# login: admin
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
argocd login localhost:8080 # login argocd using cli
# argocd account update-password # Optionally update password

# list availabel clusters
kubectl config get-contexts -o name

argocd cluster add admin@cluster-yaml.us-east-1.eksctl.io # add this cluster to argocd

# add an apllication
argocd app create node-app --repo https://github.com/GabrielBrotas/eks-argocd-nodeapp --path k8s --dest-server https://2614DF4BE88C9958162441D3BE4B1832.gr7.us-east-1.eks.amazonaws.com --dest-namespace default
```