class Api::V1::MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies 
    end 

    def create
        movie = Movie.new(movie_params)
        if movie.save
            render json: movie
        else 
            render json: {error: 'Please try again'}
        end 
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie
    end 

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
    end 

    private

    def movie_params
        params.require(:movie).permit(:title, :description, :rating, :genre_id)
    end 
end

