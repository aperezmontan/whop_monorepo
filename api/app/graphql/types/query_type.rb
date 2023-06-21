module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    # Get all notes
    field :notes, [Types::NoteType], null: false
    def notes
      Note.all
    end

    # Get a specific note
    field :note, Types::NoteType, null: false do
      argument :id, ID, required: true
    end
    def note(id:)
      Note.find(id)
    end
  end
end
