class Api::V1::MoviesController < ApplicationController

    before_action :set_genre

    def index
        #render all movies
        #render movies associated with a genre
        render json: @genre.movies 
    end 

    def create
        movie = @genre.movie.build(movie_params)
        if movie.save
            render json: movie
        else 
            render json: {error: 'Please try again'}
        end 
    end

    def show
        # movie = @genre.movies.find(by(id: params[:id]))
        movie = Movie.find(params[:id])
        render json: movie
    end 

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
    end 

    private

    def set_genre
        @genre = Genre.find(params[:genre_id])
    end 

    def movie_params
        params.require(:movie).permit(:title, :description, :rating, :genre_id)
    end 
end

        # if params[:genre_id]
        #     movie = Genre.find_by(id: params[:genre_id]).movies.distinct
        #     genre = Genre.find_by(id: params[:genre_id])
        # else 
        #     movies = Movies.all
        # end