class Api::V1::GenresController < ApplicationController
    def index
        genres = Genre.all
        render json: genres 
    end 

    def create
        genre = Genre.new(genre_params)
        if genre.save
            render json: genre
        else 
            render json: {error: 'Please try again'}
        end 
    end

    def show
        genre = Genre.find(params[:id])
        render json: genre
    end 

    def destroy
        genre = Genre.find(params[:id])
        genre.destroy
    end 

    private

    def genre_params
        params.require(:genre).permit(:name)
    end 
end
