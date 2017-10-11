class CommentsController < ApplicationController
  def create
    comment = Comment.new
    comment.content = params[:content]
    comment.dish_id = params[:dish_id]
    comment.save
    redirect_to "/dishes/#{comment.dish_id}"
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.content = params[:content]
    @comment.save
    redirect_to "/dishes/#{@comment.dish_id}"
  end

  def delete
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    @dish_id = @comment.dish_id
    @comment.destroy
    redirect_to "/dishes/#{@dish_id}"
  end
end
