from django.shortcuts import render, get_object_or_404
from .models import Post
from django.http import Http404


def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post/list.html', {'post': posts})


def post_detail(request, id):
    post = get_object_or_404(Post, id=id, status=Post.Status.PUBLISHED)
    # try:
    #     post = Post.publish.get(id=id)
    # except Post.DoesNotExist:
    #     raise Http404('No Post found')

    return render(request, 'blog/post/detail.html', {'post': post})