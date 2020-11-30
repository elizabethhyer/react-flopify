class Api::V1::MoviesController < ApplicationController

    before_action :set_genre

    def index
        if params[:genre_id]
            movies = Genre.find_by(id: params[:genre_id]).movies.distinct
            genre = Genre.find_by(id: params[:genre_id])
        else 
            movies = Movie.all
        end 
        render json: movies 
    end 

    def create
        movie = @genre.movies.build(movie_params)
        if movie.save
            render json: @genre
        else 
            render json: {error: 'Please try again'}
        end 
    end

    def update 
        movie = Movie.find(params[:id])
        movie.update(movie_params)
        if movie.save
            render json: movie
        else 
            render json: {error: 'Please try again'}
    end 

    def show 
        movie = Movie.find(params[:id])
        render json: movie
    end 

    def destroy
        movie = Movie.find(params[:id])
        genre = Genre.find(movie.genre_id)
        movie.destroy
        render json: genre
    end 

    private

    def set_genre
        @genre = Genre.find(params[:genre_id])
    end 

    def movie_params
        params.require(:movie).permit(:title, :description, :rating, :genre_id)
    end 
end
