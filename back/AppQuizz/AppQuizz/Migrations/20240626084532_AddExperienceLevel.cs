using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppQuizz.Migrations
{
    /// <inheritdoc />
    public partial class AddExperienceLevel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ExperienceLevelId",
                table: "Questions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ExperienceLevels",
                columns: table => new
                {
                    ExperienceLevelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LevelName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExperienceLevels", x => x.ExperienceLevelId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Questions_ExperienceLevelId",
                table: "Questions",
                column: "ExperienceLevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_ExperienceLevels_ExperienceLevelId",
                table: "Questions",
                column: "ExperienceLevelId",
                principalTable: "ExperienceLevels",
                principalColumn: "ExperienceLevelId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_ExperienceLevels_ExperienceLevelId",
                table: "Questions");

            migrationBuilder.DropTable(
                name: "ExperienceLevels");

            migrationBuilder.DropIndex(
                name: "IX_Questions_ExperienceLevelId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ExperienceLevelId",
                table: "Questions");
        }
    }
}
